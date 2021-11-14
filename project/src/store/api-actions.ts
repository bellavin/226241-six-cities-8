import { ThunkActionResult } from '../types/action';
import { AuthData, PostReview } from '../types/types';
import { loadOfferItem, loadOfferList, loadNearList, loadReviewList, loadFavoriteList, requireAuth, requireLogout, redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
import { adaptOfferItem, adaptOfferList, adaptReview } from '../adapters';
import { AuthStatus, AppRoute } from '../const';
import { Offer, Review } from '../types/types';

export enum APIRoute {
  offerList = '/hotels',
  reviewList = '/comments',
  favoriteList = '/favorite',
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
    const {data} = await api.get<Offer[]>(APIRoute.offerList);
    dispatch(loadOfferList(adaptOfferList(data)));
  };

export const fetchOfferItemAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Offer>(`${APIRoute.offerList}/${id}`);
    dispatch(loadOfferItem(adaptOfferItem(data)));
  };

export const fetchNearListAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(`${APIRoute.offerList}/${id}/nearby`);
    dispatch(loadNearList(adaptOfferList(data)));
  };

export const fetchReviewListAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Review[]>(`${APIRoute.reviewList}/${id}`);
    dispatch(loadReviewList(adaptReview(data)));
  };

export const postReviewAction = (id: string, {comment, rating}: PostReview): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post(`${APIRoute.reviewList}/${id}`, {comment, rating});
    const {data} = await api.get<Review[]>(`${APIRoute.reviewList}/${id}`);
    dispatch(loadReviewList(adaptReview(data)));
  };

export const fetchFavoriteListAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(APIRoute.favoriteList);
    dispatch(loadFavoriteList(adaptOfferList(data)));
  };

export const postFavoriteListAction = (id: string, status: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post(`${APIRoute.favoriteList}/${id}/${status}`);
    const {data} = await api.get<Offer[]>(APIRoute.favoriteList);
    dispatch(loadFavoriteList(adaptOfferList(data)));
  };
