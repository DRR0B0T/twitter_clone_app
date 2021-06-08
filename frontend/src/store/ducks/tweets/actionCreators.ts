import { TweetsState} from "./contracts/state";
import {Action} from "redux";

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
}

export interface SetTweetsActionsInterface extends Action<TweetsActionsType>{
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState['items'];
}

export interface FetchTweetsActionsInterface extends Action<TweetsActionsType>{
  type: TweetsActionsType.FETCH_TWEETS;
}

export const setTweets = (payload: TweetsState['items']):SetTweetsActionsInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
})

export const fetchTweets = ():FetchTweetsActionsInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
})

export type TweetsActions = SetTweetsActionsInterface
