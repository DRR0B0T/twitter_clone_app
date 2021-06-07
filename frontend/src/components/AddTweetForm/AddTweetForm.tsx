import React, {useState} from 'react';
import {Avatar, Button, CircularProgress, IconButton, TextareaAutosize} from "@material-ui/core";
import classNames from "classnames";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import {useHomeStyles} from "../../pages/Home";

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
}

const MAX_LENGTH = 280

 const AddTweetForm: React.FC<AddTweetFormProps> = ({classes}: AddTweetFormProps): React.ReactElement => {
   const [text, setText] = React.useState('');
   const textLimitPercent = Math.round((text.length / 280) * 100);
   const textCount = MAX_LENGTH - text.length ;

   const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>) => {
     if (e.currentTarget) {
       setText(e.currentTarget.value)
     }
   }

   return (<div className={classes.addForm}>
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
          value={textLimitPercent > 100 ? 100 : textLimitPercent}
          style={textLimitPercent >= 100 ? { color: 'red' } : undefined}
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
        <Button disabled={textLimitPercent >= 100} color='primary' variant='contained'>
          Твитнуть
        </Button>
      </div>
    </div>
  </div>)
};

export default AddTweetForm;