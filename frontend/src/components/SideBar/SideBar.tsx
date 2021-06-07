import React from 'react';
import {Button, Hidden, IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import CreateIcon from '@material-ui/icons/Create';
import {useHomeStyles} from "../../pages/Home";

interface SideBarProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideBar: React.FC<SideBarProps> = ({classes}: SideBarProps): React.ReactElement => {
    return (
        <ul className={classes.sideMenuList}>
            <li  >
                <IconButton className={classes.logoIcon} aria-label="delete" color='primary' >
                    <TwitterIcon className={classes.logo} />
                </IconButton>
            </li>
            <li className={classes.sideMenuListItem} >

                    <HomeOutlinedIcon className={classes.sideMenuListItemIcon} color='primary'/>
                    <Hidden smDown>
                        <Typography color='primary' className={classes.sideMenuListItemLabel} variant='h6'>
                            Главная
                        </Typography>
                    </Hidden>

            </li>
            <li className={classes.sideMenuListItem} >
                <SearchIcon className={classes.sideMenuListItemIcon} />
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                        Поиск
                    </Typography>
                </Hidden>
            </li>
            <li className={classes.sideMenuListItem} >
                <NotificationsNoneOutlinedIcon className={classes.sideMenuListItemIcon} />
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                        Уведомления
                    </Typography>
                </Hidden>
            </li>
            <li className={classes.sideMenuListItem} >
                <MailOutlineOutlinedIcon className={classes.sideMenuListItemIcon} />
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                        Сообщения
                    </Typography>
                </Hidden>
            </li>
            <li className={classes.sideMenuListItem} >
                <BookmarkBorderOutlinedIcon className={classes.sideMenuListItemIcon} />
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                        Закладки
                    </Typography>
                </Hidden>
            </li>
            <li className={classes.sideMenuListItem} >
                <FeaturedPlayListOutlinedIcon className={classes.sideMenuListItemIcon} />
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                        Списки
                    </Typography>
                </Hidden>
            </li>
            <li className={classes.sideMenuListItem} >
                <PermIdentityOutlinedIcon className={classes.sideMenuListItemIcon} />
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                        Профиль
                    </Typography>
                </Hidden>
            </li>

                <Button
                    className={classes.sideMenuTweetButton}
                    variant='contained'
                    color='primary'
                    fullWidth>
                    <Hidden smDown>Твитнуть</Hidden>
                    <Hidden mdUp>
                        <CreateIcon />
                    </Hidden>
                </Button>

        </ul>
    );
}