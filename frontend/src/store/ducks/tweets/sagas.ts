import {call, put, takeLatest} from 'redux-saga/effects'
import {
  FetchAddTweetActionsInterface,
  setTweets,
  setTweetsLoadingState,
  TweetsActionsType,
  addTweet
} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState, Tweet} from "./contracts/state";


export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items))
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
  }
}

export function* fetchAddTweetRequest({payload}:FetchAddTweetActionsInterface): any {
  try {
    const data: Tweet = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: "Test User",
        username: "test",
        avatarUrl: "https://source.unsplash.com/random/100*100?5"
      },
    }
    const item = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item))
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}