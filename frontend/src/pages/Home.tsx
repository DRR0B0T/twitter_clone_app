import React from 'react';
import {
    Grid,
    Paper,
    Typography,
    makeStyles,
    Container,
    withStyles,
    Theme,
    TextField,
    Avatar,
     Button, InputAdornment, List, ListItem, ListItemText, Divider, ListItemAvatar,
} from "@material-ui/core";
import { grey } from '@material-ui/core/colors';
import {Tweet} from "../components/Tweet/Tweet";
import {SideBar} from "../components/SideBar/SideBar";
import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import AddTweetForm from "../components/AddTweetForm/AddTweetForm";


export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
      height: '100vh',
    },
    logo: {
        fontSize: 36,
    },
    logoIcon: {
        margin: '10px 0',
    },
    sideMenuList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3.5),
        marginTop: theme.spacing(3),
    },
    sideMenuListItem: {
        cursor: 'pointer',
        display: 'inline-flex',
        position: 'relative',
        marginBottom: 10,
        padding: '0 25px 0 12px',
        borderRadius: 30,
        height: 50,
        transition: 'background-color 0.1s ease-in-out',
        alignItems: 'center',
        '&:hover': {

                backgroundColor: "rgba(29,161,242,0.1)",
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },

        },
        // '& div': {
        //     display: 'inline-flex',
        //     position: 'relative',
        //     marginBottom: 10,
        //     padding: '0 25px 0 12px',
        //     borderRadius: 30,
        //     height: 50,
        //     transition: 'background-color 0.1s ease-in-out',
        //     alignItems: 'center',
        // }
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 32,
        marginLeft: -5,
    },
    tweetsWrapper: {
        height: '100%',
        borderRadius: 0,
        borderTop: '0',
        borderBottom: '0',
    },
    tweet: {
        display: 'flex',
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        }
    },
    tweetHeader: {
        display: 'flex',

        borderTop: '0',
        borderRight: '0',
        borderLeft: '0',
        borderRadius: 0,
        top: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        },
    },
    tweetAvatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginRight: 15,
    },
    tweetUserFooter: {
        display: 'flex',
        position: 'relative',
        left: -14,
        justifyContent: 'space-between',
        maxWidth: 450,
    },

    tweetUserName: {
        color: grey[500],
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& MuiList-root': {
            paddingTop: 0,
        }
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        }
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            fontWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#SDF3F6',
        }
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#e6ecf0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        }
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
}))

const SearchTextField = withStyles((theme:Theme) =>({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#e6ecf0',
            padding: 0,
            paddingLeft: 15,
            '&.Mui-focused': {
                backgroundColor: '#fff',
                    '& fieldset':{
                    borderWidth: 1,
                    borderColor: theme.palette.primary.main,
                },
                    '& svg path':{
                    fill: theme.palette.primary.main,
                },
            },
            '&:hover': {
                '& fieldset' : {borderColor: 'transparent'},
            },
            '& fieldset': {
                borderColor: 'transparent',
                borderWidth:1,
            },
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px 14px 14px 5px',
        }
    },
    }))(TextField);



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
                                <AddTweetForm classes={classes}/>
                                <div className={classes.addFormBottomLine} />
                            </Paper>

                            {
                                [...new Array(10).fill(<Paper className={classes.tweetsWrapper}  variant="outlined" >
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
                                </Paper>)]
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