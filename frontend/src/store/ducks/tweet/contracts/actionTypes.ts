import {Action} from "redux";
import {LoadingState} from "./state";
import {Tweet} from "../../tweets/contracts/state";

export enum TweetActionsType {
  SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
  FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
  SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
}

export interface SetTweetDataActionsInterface extends Action<TweetActionsType>{
  type: TweetActionsType.SET_TWEET_DATA;
  payload: Tweet;
}

export interface FetchTweetDataActionInterface extends Action<TweetActionsType>{
  type: TweetActionsType.FETCH_TWEET_DATA;
  payload: string;
}

export interface SetTweetLoadingStateInterface extends Action<TweetActionsType>{
  type: TweetActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}