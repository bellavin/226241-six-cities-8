import { ThunkActionResult } from '../types/action';
import { AuthData, PostReview } from '../types/types';
import { loadOfferItem, loadOfferList, loadNearList, loadReviewList, loadFavoriteList, requireAuth, requireLogout, redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
import { adaptOfferItem, adaptOfferList, adaptReview } from '../adapters';
import { AuthStatus, AppRoute, FavoriteEventParam } from '../const';
import { Offer, Review } from '../types/types';
import { updateOfferList } from '../utils';

export enum APIRoute {
  OfferList = '/hotels',
  ReviewList = '/comments',
  FavoriteList = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login);
    dispatch(requireAuth(AuthStatus.Auth));
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: string}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuth(AuthStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
    dispatch(requireAuth(AuthStatus.NoAuth));
  };

export const fetchOfferListAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(APIRoute.OfferList);
    dispatch(loadOfferList(adaptOfferList(data)));
  };

export const fetchOfferItemAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Offer>(`${APIRoute.OfferList}/${id}`);
    dispatch(loadOfferItem(adaptOfferItem(data)));
  };

export const fetchNearListAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(`${APIRoute.OfferList}/${id}/nearby`);
    dispatch(loadNearList(adaptOfferList(data)));
  };

export const fetchReviewListAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Review[]>(`${APIRoute.ReviewList}/${id}`);
    dispatch(loadReviewList(adaptReview(data)));
  };

export const postReviewAction = (id: string, {comment, rating}: PostReview): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post(`${APIRoute.ReviewList}/${id}`, {comment, rating});
    const {data} = await api.get<Review[]>(`${APIRoute.ReviewList}/${id}`);
    dispatch(loadReviewList(adaptReview(data)));
  };

export const fetchFavoriteListAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(APIRoute.FavoriteList);
    dispatch(loadFavoriteList(adaptOfferList(data)));
  };

export const postFavoriteListAction = (id: string, isFeature: boolean, page: FavoriteEventParam): ThunkActionResult =>
  async (dispatch, getState, api) => {
    const status = Number(!isFeature);

    await api.post(`${APIRoute.FavoriteList}/${id}/${status}`);
    const state = getState();

    if (page === FavoriteEventParam.Favorites) {
      const favoriteId = state.favoriteList.findIndex((item) => item.id === id);
      const newFavoriteList = [...state.favoriteList];
      dispatch(loadFavoriteList([...newFavoriteList.slice(0, favoriteId), ...newFavoriteList.slice(favoriteId + 1)]));
    }

    if (page === FavoriteEventParam.Main) {
      const newOfferList = updateOfferList(id, !isFeature, state.offerList);
      dispatch(loadOfferList(newOfferList));
    }

    if (page === FavoriteEventParam.Near) {
      const newNearList = updateOfferList(id, !isFeature, state.nearList);
      dispatch(loadNearList(newNearList));
    }

    if (page === FavoriteEventParam.Offer && state.offerItem !== null) {
      const newOffer = {...state.offerItem};
      newOffer.isFeature = !isFeature;
      dispatch(loadOfferItem(newOffer));
    }
  };
