import React from 'react';
import {Avatar, IconButton, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import {useHomeStyles} from "../../pages/Home/theme";

interface TweetProps {
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    }
}

export const  Tweet: React.FC<TweetProps> = ({ text, user, classes }: TweetProps): React.ReactElement => {
    return (
        <Paper className={classNames(classes.tweet, classes.tweetHeader ) }  variant="outlined" >
                    <Avatar
                        className={classes.tweetAvatar}
                        alt={`Аватарка пользователя ${user.fullname}`}
                        src={user.avatarUrl}
                    />
                    <Typography>
                        <b>{user.fullname}</b>&nbsp;
                        <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
                        <span className={classes.tweetUserName}>·</span>&nbsp;
                        <span className={classes.tweetUserName}>1 ч</span>
                    </Typography>
                    <Typography className={classes.tweetHeader} variant='body1' gutterBottom>
                        {text}
                    </Typography>


                    <div className={classes.tweetUserFooter}>
                        <div>
                            <IconButton color='primary'>
                                <ChatBubbleOutlineOutlinedIcon style={{ fontSize: '21' }} />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton color='primary'>
                                <RepeatOutlinedIcon style={{ fontSize: '21' }} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton >
                                <FavoriteBorderOutlinedIcon style={{ fontSize: '21' }} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton color='primary'>
                                <ReplyOutlinedIcon style={{ fontSize: '21' }} />
                            </IconButton>
                        </div>
                    </div>
         </Paper>
    );
}