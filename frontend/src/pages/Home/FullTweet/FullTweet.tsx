import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import {fetchTweetData} from "../../../store/ducks/tweet/actionCreators";
import {useHomeStyles} from "../theme";
import {Tweet} from "../../../components/Tweet/Tweet";
import { selectIsTweetLoading, selectTweetData} from "../../../store/ducks/tweet/selectors";
import {CircularProgress} from "@material-ui/core";

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyles()
  const dispatch = useDispatch()
  const tweetData = useSelector(selectTweetData)
  const isLoading = useSelector(selectIsTweetLoading)
  const params: { id?: string } = useParams()
  const id = params.id

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id))
    }
  }, [dispatch, id])

  if (!tweetData) {
    return null
  }

  return isLoading ? (
    <div className={classes.tweetsCentered}>
      <CircularProgress/>
    </div>
  ) : (
    <Tweet classes={classes} {...tweetData}/>)


}