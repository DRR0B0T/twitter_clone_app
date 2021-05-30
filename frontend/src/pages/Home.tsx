import React from 'react';
import {
    Grid,
    Paper,
    Typography,
    makeStyles,
    Container,
    withStyles,
    createStyles,
    InputBase,
    Theme,
} from "@material-ui/core";
import { grey } from '@material-ui/core/colors';
import {Tweet} from "../components/Tweet/Tweet";
import {SideBar} from "../components/SideBar/SideBar";



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
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 230,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2),
    },
    sideMenuListItem: {
        cursor: 'pointer',

        '&:hover':{
            '& div':{
                backgroundColor: "rgba(29,161,242,0.1)",
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                }
            }
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0 25px 0 12px',
            borderRadius: 30,
            height: 50,
            marginBottom: 8,
            transition: 'background-color 0.1s ease-in-out',
        },

    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 32,
        marginLeft: '-5px',
    },
    tweetsWrapper: {
        borderRadius: 0,

        borderTop: '0',
        borderBottom: '0',
    },
    tweetHeader: {
        borderTop: '0',
        borderRight: '0',
        borderLeft: '0',
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        },
    },
    tweetUserName: {
        color: grey[500],
    },
    tweet: {
        cursor: 'pointer',
        padding: 20,
        '&:hover': {
           backgroundColor: 'rgb(245, 248, 250)',
        }
},
    tweetAvatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    tweetUserFooter: {
        position: 'relative',
        left: -14,
        display: 'flex',
        justifyContent: 'space-between',
        width: 450,
    },

}))

const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            padding: 0,
            height: 48,
    },
}),
)(InputBase);



export const Home = () => {
    const classes = useHomeStyles()

    return (
            <Container className={classes.wrapper} maxWidth="lg">
                <Grid container  spacing={3}>
                    <Grid item xs={3}>
                        <SideBar classes={classes}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.tweetsWrapper} variant="outlined" >
                        <Paper className={classes.tweetHeader}  variant="outlined" >
                            <Typography variant='h6'>Главная</Typography>
                        </Paper>
                            {
                                [...new Array(20).fill(<Paper className={classes.tweetsWrapper} variant="outlined" >
                                    <Tweet
                                        text='Американские политики провели слушания «Понимание авторитаризма и клептократии в России». На них обсуждали ситуацию с Навальным, голосование по Конституции, санкции против «Северного потока-2», а также коррупцию и цензуру в России.'
                                        user={{
                                            fullname: 'Дмитрий Медведев',
                                            username: 'MedvedevRussia',
                                            avatarUrl: "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                                        }}
                                        classes={classes}
                                    />
                                </Paper>)]
                            }
                        </Paper>

                    </Grid>
                    <Grid  item xs={3}>
                        <SearchTextField
                            placeholder='Поиск в Твиттере'
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Container>
    );
}