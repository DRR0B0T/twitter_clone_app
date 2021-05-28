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
    InputBase, InputAdornment,
} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import {AccountCircle} from "@material-ui/icons";



const useHomeStyles = makeStyles(() => ({
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
                        <Paper>xs</Paper>
                    </Grid>
                    <Grid  item xs={3}>
                        <SearchTextField

                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Container>
    );
}