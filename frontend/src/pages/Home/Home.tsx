import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Container,
  Avatar,
  Button,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar, CircularProgress,
} from "@material-ui/core";
import {Tweet} from "../../components/Tweet/Tweet";
import {SideBar} from "../../components/SideBar/SideBar";
import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import AddTweetForm from "../../components/AddTweetForm/AddTweetForm";
import { useHomeStyles } from './theme';
import { SearchTextField } from '../../components/SerachTextField/SearchTextField'
import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import {fetchTags} from "../../store/ducks/tags/actionCreators";
import {Tags} from "../../components/Tags/Tags";
import { Route } from 'react-router-dom';
import {BackButton} from "../../components/BackButton/BackButton";
import {FullTweet} from "./FullTweet/FullTweet";


export const Home = ():React.ReactElement => {
  const classes = useHomeStyles()
  const dispatch = useDispatch()
  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsTweetsLoading)



  React.useEffect(() => {
    dispatch(fetchTweets())
    dispatch(fetchTags())
  },[dispatch])

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container  spacing={3}>
        <Grid item md={3} sm={1}>
          <SideBar classes={classes}/>
        </Grid>
        <Grid item md={6} sm={8}>
          <Paper className={classes.tweetsWrapper} variant="outlined" >
             <Paper className={classes.tweetHeader}  variant="outlined" >

           <Route exact path='/home/:any'>
            <BackButton />
           </Route>

           <Route exact path={['/home', '/home/search']}>
               <Typography variant='h6'>Твиты</Typography>
           </Route>

           <Route exact path='/home/tweet'>
               <Typography variant='h6'>Твитнуть</Typography>
           </Route>

             </Paper>
            <Route exact path={['/home', '/search']}>
              <Paper>
                <div className={classes.addForm}><AddTweetForm classes={classes}/></div>
                <div className={classes.addFormBottomLine} />
              </Paper>
            </Route>
            <Route path='/home' exact>
              {isLoading
                ? <div className={classes.tweetsCentered}><CircularProgress /></div>
                : tweets.map((tweet) =>
                <Tweet
                  key={tweet._id}
                  classes={classes}
                  {...tweet}
                />)}
            </Route>

            <Route path='/home/tweet/:id' component={FullTweet} exact>

            </Route>
          </Paper>

        </Grid>
        <Grid   item md={3} sm={3}>
          <div className={classes.rightSide}>
            <SearchTextField
              variant='outlined'
              placeholder='Поиск по Твиттеру'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Tags classes={classes}  />
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                      alt='Антоша Чехонте'/>
                  </ListItemAvatar>
                  <ListItemText
                    primary='Dock of Shame'
                    secondary={
                      <Typography component='span' variant='body2'>
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color='primary'>
                    <PersonAddIcon/>
                  </Button>
                </ListItem>
                <Divider component='li'/>
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}