import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/types';
import { loadOfferList, loadNearList, loadReviewList, redirectToRoute, requireAuth, requireLogout } from './action';
import { saveToken, dropToken } from '../services/token';
import { adaptOffer, adaptReview } from '../adapters';
import { AuthStatus, AppRoute } from '../const';
import { Offer, Review } from '../types/types';

export enum APIRoute {
  offerList = '/hotels',
  reviewList = '/comments',
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
    dispatch(loadOfferList(adaptOffer(data)));
  };

export const fetchNearListAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(`${APIRoute.offerList}/${id}/nearby`);
    dispatch(loadNearList(adaptOffer(data)));
  };

export const fetchReviewListAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Review[]>(`${APIRoute.reviewList}/${id}`);
    dispatch(loadReviewList(adaptReview(data)));
  };
