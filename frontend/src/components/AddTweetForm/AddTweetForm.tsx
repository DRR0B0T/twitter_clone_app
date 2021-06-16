import React from 'react';
import {Avatar, Button, CircularProgress, IconButton, TextareaAutosize} from "@material-ui/core";
import classNames from "classnames";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import {useHomeStyles} from "../../pages/Home/theme";
import {useDispatch, useSelector} from "react-redux";
import {fetchAddTweet} from "../../store/ducks/tweets/actionCreators";
import {selectAddFormState} from "../../store/ducks/tweets/selectors";
import Alert from '@material-ui/lab/Alert';
import {AddFormState} from "../../store/ducks/tweets/contracts/state";


interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number;
}

const MAX_LENGTH = 280

const AddTweetForm: React.FC<AddTweetFormProps> = ({
 classes,
 maxRows,
}: AddTweetFormProps): React.ReactElement => {
  const dispatch = useDispatch()
  const addFormState = useSelector(selectAddFormState)
  const [text, setText] = React.useState<string>('');
  const textLimitPercent = Math.round((text.length / 280) * 100)
  const textCount = MAX_LENGTH - text.length;

  const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value)
    }
  }

  const handleClickAddTweet = (): void => {
    dispatch(fetchAddTweet(text))
    setText('')
  }


  return (
    <div>

      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src='https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        />
        <TextareaAutosize
          onChange={handleChangeTextArea}
          className={classes.addFormTextarea}
          placeholder="Что происходит?"
          value={text}
          rowsMax={maxRows}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classNames(classes.tweetUserFooter, classes.addFormBottomActions)}>
          <IconButton color='primary'>
            <ImageOutlinedIcon style={{fontSize: 26,}}/>
          </IconButton>
          <IconButton color='primary'>
            <SentimentSatisfiedOutlinedIcon style={{fontSize: 26,}}/>
          </IconButton>
        </div>

        <div className={classes.addFormBottomRight}>
          {
            text && (
              <>
                <span>{textCount}</span>
                <div className={classes.addFormCircleProgress}>
                  <CircularProgress
                    variant='static'
                    size={20}
                    thickness={5}
                    value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                    style={text.length >= MAX_LENGTH ? {color: 'red'} : undefined}
                  />
                  <CircularProgress
                    style={{color: 'rgba(0,0,0,0.1)'}}
                    variant='static'
                    size={20}
                    thickness={5}
                    value={100}
                  />
                </div>
              </>)
          }
          <Button
            onClick={handleClickAddTweet}
            disabled={addFormState === AddFormState.LOADING || !text || text.length >= MAX_LENGTH}
            color='primary'
            variant='contained'
          >
            {addFormState === AddFormState.LOADING ? (<CircularProgress color='inherit' size={15}/>) : ('Твитнуть')}
          </Button>
        </div>
      </div>
      {addFormState === AddFormState.ERROR && (<Alert severity="error">Ошибка при добавлении твита 😔</Alert>)}
    </div>)
};

export default AddTweetForm;