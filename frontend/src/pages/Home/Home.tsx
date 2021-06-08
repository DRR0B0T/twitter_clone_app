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
  ListItemAvatar,
} from "@material-ui/core";
import {Tweet} from "../../components/Tweet/Tweet";
import {SideBar} from "../../components/SideBar/SideBar";
import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import AddTweetForm from "../../components/AddTweetForm/AddTweetForm";
import { useHomeStyles } from './theme';
import { SearchTextField } from '../../components/SerachTextField/SearchTextField'


export const Home = ():React.ReactElement => {
  const classes = useHomeStyles()

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container  spacing={3}>
        <Grid item md={3} sm={1}>
          <SideBar classes={classes}/>
        </Grid>
        <Grid item md={6} sm={8}>
          <Paper className={classes.tweetsWrapper} variant="outlined" >
            <Paper className={classes.tweetHeader}  variant="outlined" >
              <Typography variant='h6'>Главная</Typography>
            </Paper>

            <Paper>
              <div className={classes.addForm}><AddTweetForm classes={classes}/></div>
              <div className={classes.addFormBottomLine} />
            </Paper>

            {
              [...new Array(10).fill(
                <Tweet
                  user={{
                    fullname: 'Дмитрий Медведев',
                    username: 'MedvedevRussia',
                    avatarUrl: "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                  }}
                  text='Американские политики провели слушания
                                        «Понимание авторитаризма и клептократии в России».
                                        На них обсуждали ситуацию с Навальным, голосование по Конституции,
                                        санкции против «Северного потока-2», а также коррупцию и цензуру в России.'
                  classes={classes}
                />
              )]
            }
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
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                <b>Актуальные темы</b>
              </Paper>
              <List>
                <ListItem>
                  <ListItemText
                    primary='Альметьевск'
                    secondary={
                      <Typography component='span' variant='body2'>
                        Твитов: 4200
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component='li'/>
                <ListItem>
                  <ListItemText
                    primary='Казань'
                    secondary={
                      <Typography component='span' variant='body2'>
                        Твитов: 42420
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component='li'/>
              </List>
            </Paper>
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