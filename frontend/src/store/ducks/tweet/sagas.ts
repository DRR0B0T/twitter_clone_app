import {call, put} from 'redux-saga/effects'
import {setTweetData, setTweetLoadingState} from "./actionCreators";
import {LoadingState} from "./contracts/state";
import { TweetsApi } from '../../../services/api/tweetsApi';
import {FetchTweetDataActionInterface, TweetActionsType} from "./contracts/actionTypes";
import * as Eff from 'redux-saga/effects'

const takeLatest: any = Eff.takeLatest;

export function* fetchTweetsRequest({ payload: tweetId }: FetchTweetDataActionInterface) {


  try {
    const data = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweetData(data))
  } catch (e) {
    yield put(setTweetLoadingState(LoadingState.ERROR))
  }
}

export function* tweetSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetsRequest)
}