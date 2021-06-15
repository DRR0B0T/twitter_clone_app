import {LoadingState, TweetState} from "./contracts/state";
import {
  FetchTweetDataActionInterface,
  SetTweetDataActionsInterface,
  SetTweetLoadingStateInterface,
  TweetActionsType
} from "./contracts/actionTypes";

export const setTweetData = (payload: TweetState['data']):SetTweetDataActionsInterface => ({
  type: TweetActionsType.SET_TWEET_DATA,
  payload,
})
export const setTweetLoadingState = (
  payload: LoadingState
):SetTweetLoadingStateInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
})

export const fetchTweetData = (payload: string):FetchTweetDataActionInterface => ({
  type: TweetActionsType.FETCH_TWEET_DATA,
  payload,
})

export type TweetActions =
  | SetTweetDataActionsInterface
  | FetchTweetDataActionInterface
  | SetTweetLoadingStateInterface
