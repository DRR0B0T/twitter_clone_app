import React from 'react';
import {Button, IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import {useHomeStyles} from "../../pages/Home";

interface SideBarProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideBar: React.FC<SideBarProps> = ({classes}: SideBarProps): React.ReactElement => {
    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem} >
                <IconButton className={classes.logoIcon} aria-label="delete" color='primary' >
                    <TwitterIcon className={classes.logo} />
                </IconButton>
            </li>
            <li className={classes.sideMenuListItem} >
                <div>
                    <HomeOutlinedIcon className={classes.sideMenuListItemIcon} color='primary'/>
                    <Typography color='primary' className={classes.sideMenuListItemLabel} variant='h6'>Главная</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem} >
                <div>
                        <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem} >
                <div>
                        <NotificationsNoneOutlinedIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem} >
                <div>
                        <MailOutlineOutlinedIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem} >
                <div>
                        <BookmarkBorderOutlinedIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Закладки</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem} >
                <div>
                        <FeaturedPlayListOutlinedIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Списки</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem} >
                <div>
                        <PermIdentityOutlinedIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem} >
                <Button className={classes.sideMenuTweetButton} variant='contained' color='primary' fullWidth>Твитнуть</Button>
            </li>
        </ul>
    );
}