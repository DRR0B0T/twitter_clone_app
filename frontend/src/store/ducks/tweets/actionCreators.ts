import {AddFormState, LoadingState, Tweet, TweetsState} from "./contracts/state";
import {
  AddTweetActionsInterface,
  FetchAddTweetActionsInterface, FetchTweetsActionsInterface, SetAddFormStateActionInterface,
  SetTweetsActionsInterface, SetTweetsLoadingStateInterface, TweetsActionsType
} from "./contracts/actionTypes";


export const setTweets = (payload: TweetsState['items']):SetTweetsActionsInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
})

export const fetchAddTweet = (payload: string):FetchAddTweetActionsInterface => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
})

export const addTweet = (payload: Tweet):AddTweetActionsInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
})

export const setTweetsLoadingState = (
  payload: LoadingState
):SetTweetsLoadingStateInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
})

export const setAddFormState = (
  payload: AddFormState
):SetAddFormStateActionInterface => ({
  type: TweetsActionsType.SET_ADD_FORM_STATE,
  payload,
})

export const fetchTweets = ():FetchTweetsActionsInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
})

export type TweetsActions =
  | SetTweetsActionsInterface
  | FetchTweetsActionsInterface
  | SetTweetsLoadingStateInterface
  | FetchAddTweetActionsInterface
  | AddTweetActionsInterface
  | SetAddFormStateActionInterface
