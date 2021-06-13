import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useParams } from 'react-router-dom';
import {fetchTweetData} from "../../../store/ducks/tweet/actionCreators";
import {useHomeStyles} from "../theme";
import {Tweet} from "../../../components/Tweet/Tweet";
import {selectTweetData} from "../../../store/ducks/tweet/selectors";

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyles()
  const dispatch = useDispatch()
  const tweetData = useSelector(selectTweetData)
  const params: {id?: string} = useParams()
  const id = params.id

  React.useEffect(()=>{
    if (id) {
      dispatch(fetchTweetData(id))
    }
  },[dispatch, id])

  if (!tweetData) {
    return null
  }

  return (
    <Tweet classes={classes} {...tweetData}/>
  );
}