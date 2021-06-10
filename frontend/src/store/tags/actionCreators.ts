import {LoadingState, TagsState} from "./contracts/state";
import {Action} from "redux";

export enum TagsActionsType {
  SET_TAGS = 'tweets/SET_TAGS',
  FETCH_TAGS = 'tweets/FETCH_TAGS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

export interface SetTagsActionsInterface extends Action<TagsActionsType>{
  type: TagsActionsType.SET_TAGS;
  payload: TagsState['items'];
}

export interface FetchTagsActionsInterface extends Action<TagsActionsType>{
  type: TagsActionsType.FETCH_TAGS;
}

export interface SetTagsLoadingStateInterface extends Action<TagsActionsType>{
  type: TagsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setTags = (payload: TagsState['items']):SetTagsActionsInterface => ({
  type: TagsActionsType.SET_TAGS,
  payload,
})
export const setTagsLoadingState = (
  payload: LoadingState
):SetTagsLoadingStateInterface => ({
  type: TagsActionsType.SET_LOADING_STATE,
  payload,
})

export const fetchTags = ():FetchTagsActionsInterface => ({
  type: TagsActionsType.FETCH_TAGS,
})

export type TagsActions =
  | SetTagsActionsInterface
  | FetchTagsActionsInterface
  | SetTagsLoadingStateInterface
