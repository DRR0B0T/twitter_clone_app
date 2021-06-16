import {call, put, takeLatest} from 'redux-saga/effects'
import {addTweet, setAddFormState, setTweets, setTweetsLoadingState} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {AddFormState, LoadingState, Tweet} from "./contracts/state";
import {FetchAddTweetActionsInterface, TweetsActionsType} from './contracts/actionTypes';


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
        fullname: "Adrian Chmielarz",
        username: "adrianchm",
        avatarUrl: "https://pbs.twimg.com/profile_images/1882780494/IMG_1980e_normal.jpg"
      },
    }
    const item = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item))
  } catch (e) {
    yield put(setAddFormState(AddFormState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}