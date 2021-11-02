import { ThunkActionResult } from '../types/action';
import { loadOfferList, loadNearList, loadReviewList } from './action';
import { Offer, Review } from '../types/types';
import { adaptOffer, adaptReview } from '../adapters';

export enum APIRoute {
  offerList = '/hotels',
  reviewList = '/comments',
  Login = '/login',
  Logout = '/logout',
}

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
