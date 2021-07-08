import {call, put, takeLatest} from 'redux-saga/effects'
import {addTweet, setAddFormState, setTweets, setTweetsLoadingState} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {AddFormState, LoadingState} from "./contracts/state";
import {FetchAddTweetActionsInterface, TweetsActionsType} from './contracts/actionTypes';


export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items))
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
  }
}

export function* fetchAddTweetRequest({payload: text}:FetchAddTweetActionsInterface): any {
  try {

    const item = yield call(TweetsApi.addTweet, text);
    yield put(addTweet(item))
  } catch (e) {
    yield put(setAddFormState(AddFormState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}