import { toast } from 'react-toastify';
import { ThunkActionResult } from '../types/action';
import { AuthData, PostReview } from '../types/types';
import { saveToken, dropToken } from '../services/token';
import { adaptOfferItem, adaptOfferList, adaptReview, adaptUser } from '../adapters';
import { AuthStatus, AppRoute, FavoriteEventParam } from '../const';
import { Offer, Review } from '../types/types';
import { updateOfferList } from '../utils';
import {
  loadOfferItem,
  loadOfferList,
  loadNearList,
  loadReviewList,
  loadFavoriteList,
  requireAuth,
  requireLogin,
  requireLogout,
  redirectToRoute,
  reviewRatingAction,
  reviewMessageAction,
  reviewFormBlockingAction
} from './action';

export enum APIRoute {
  OfferList = '/hotels',
  ReviewList = '/comments',
  FavoriteList = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

const ERROR_MESSAGE = 'Что-то пошло не так, проверьте соединение с сетью';

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const data = await api.get(APIRoute.Login);
      dispatch(requireLogin(adaptUser(data.data)));
      dispatch(requireAuth(AuthStatus.Auth));
    } catch {
      toast.info(ERROR_MESSAGE);
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data: {token}} = await api.post<{token: string}>(APIRoute.Login, {email, password});
      dispatch(checkAuthAction());
      dispatch(requireAuth(AuthStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
      saveToken(token);
    } catch {
      toast.info('Неверный логин или пароль. Возможно проблемы с сетью');
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireLogin({
        img: '',
        name: '',
        isPro: false,
      }));
      dispatch(requireLogout());
      dispatch(requireAuth(AuthStatus.NoAuth));
    } catch {
      toast.info(ERROR_MESSAGE);
    }
  };

export const fetchOfferListAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(APIRoute.OfferList);
    dispatch(loadOfferList(adaptOfferList(data)));
  };

export const fetchOfferItemAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.OfferList}/${id}`);
      dispatch(loadOfferItem(adaptOfferItem(data)));
    } catch {
      dispatch(redirectToRoute(AppRoute.Error404));
    }
  };

export const fetchNearListAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<Offer[]>(`${APIRoute.OfferList}/${id}/nearby`);
      dispatch(loadNearList(adaptOfferList(data)));
    } catch {
      toast.info(ERROR_MESSAGE);
    }
  };

export const fetchReviewListAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<Review[]>(`${APIRoute.ReviewList}/${id}`);
      dispatch(loadReviewList(adaptReview(data)));
    } catch {
      toast.info(ERROR_MESSAGE);
    }
  };

export const postReviewAction = (id: string, {comment, rating}: PostReview): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.post(`${APIRoute.ReviewList}/${id}`, {comment, rating});
      dispatch(fetchReviewListAction(id));
      dispatch(reviewRatingAction(0));
      dispatch(reviewMessageAction(''));
      dispatch(reviewFormBlockingAction(false));
    } catch (e) {
      toast.info('Что-то пошло не так');
      dispatch(reviewFormBlockingAction(false));
    }
  };

export const fetchFavoriteListAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.FavoriteList);
      dispatch(loadFavoriteList(adaptOfferList(data)));
    } catch {
      toast.info(ERROR_MESSAGE);
    }
  };

export const postFavoriteListAction = (id: string, isFeature: boolean, page: FavoriteEventParam): ThunkActionResult =>
  async (dispatch, getState, api) => {
    try {
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
    } catch {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };
