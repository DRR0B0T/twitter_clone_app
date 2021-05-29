import React from 'react';
import {
    Grid,
    Paper,
    Typography,
    makeStyles,
    Container,
    withStyles,
    IconButton,
    createStyles,
    InputBase,
    Avatar,
} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { grey } from '@material-ui/core/colors';
import {Tweet} from "../components/Tweet/Tweet";



export const useHomeStyles = makeStyles(() => ({
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
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center',
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 26,
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
        '&:hover': {
           backgroundColor: 'rgb(245, 248, 250)',
        }
    },
    tweetUserFooter: {
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

                        <ul className={classes.sideMenuList}>
                            <li className={classes.sideMenuListItem} >
                                <IconButton className={classes.logoIcon} aria-label="delete" color='primary' >
                                    <TwitterIcon className={classes.logo} />
                                </IconButton>
                            </li>
                            <li className={classes.sideMenuListItem} >
                                <IconButton aria-label="delete" color='primary' >
                                    <HomeOutlinedIcon className={classes.sideMenuListItemIcon} />
                                </IconButton>
                                <Typography color='primary' className={classes.sideMenuListItemLabel} variant='h6'>Главная</Typography>
                            </li>
                            <li className={classes.sideMenuListItem} >
                                <IconButton aria-label="delete" color='inherit' >
                                    <SearchIcon className={classes.sideMenuListItemIcon} />
                                </IconButton>
                                <Typography className={classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
                            </li>
                            <li className={classes.sideMenuListItem} >
                                <IconButton aria-label="delete" color='inherit' >
                                    <NotificationsNoneOutlinedIcon className={classes.sideMenuListItemIcon} />
                                </IconButton>
                                <Typography className={classes.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>
                            </li>
                            <li className={classes.sideMenuListItem} >
                                <IconButton aria-label="delete" color='inherit' >
                                    <MailOutlineOutlinedIcon className={classes.sideMenuListItemIcon} />
                                </IconButton>
                                <Typography className={classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
                            </li>
                            <li className={classes.sideMenuListItem} >
                                <IconButton aria-label="delete" color='inherit' >
                                    <BookmarkBorderOutlinedIcon className={classes.sideMenuListItemIcon} />
                                </IconButton>
                                <Typography className={classes.sideMenuListItemLabel} variant='h6'>Закладки</Typography>
                            </li>
                            <li className={classes.sideMenuListItem} >
                                <IconButton aria-label="delete" color='inherit' >
                                    <FeaturedPlayListOutlinedIcon className={classes.sideMenuListItemIcon} />
                                </IconButton>
                                <Typography className={classes.sideMenuListItemLabel} variant='h6'>Списки</Typography>
                            </li>
                            <li className={classes.sideMenuListItem} >
                                <IconButton aria-label="delete" color='inherit' >
                                    <PermIdentityOutlinedIcon className={classes.sideMenuListItemIcon} />
                                </IconButton>
                                <Typography className={classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.tweetsWrapper} variant="outlined" >
                        <Paper className={classes.tweetHeader}  variant="outlined" >
                            <Typography variant='h6'>Главная</Typography>
                        </Paper>
                        </Paper>
                        <Paper className={classes.tweetsWrapper} variant="outlined" >
                            <Tweet
                                text='Американские политики провели слушания «Понимание авторитаризма и клептократии в России». На них обсуждали ситуацию с Навальным, голосование по Конституции, санкции против «Северного потока-2», а также коррупцию и цензуру в России.'
                                classes={classes}
                                user={{
                                    fullname: 'Дмитрий Медведев',
                                    username: 'MedvedevRussia',
                                    avatarUrl: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                                }}
                            />
                        </Paper>
                    </Grid>
                    <Grid  item xs={3}>
                        <SearchTextField
                            placeholder='Поиск по Твиттеру'

                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Container>
    );
}