import React from 'react';
import {Button, Hidden, IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import CreateIcon from '@material-ui/icons/Create';
import {useHomeStyles} from "../../pages/Home/theme";
import DialogWindow from "../DialogWindow/DialogWindow";
import AddTweetForm from "../AddTweetForm/AddTweetForm";
import {Link} from "react-router-dom";

interface SideBarProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideBar: React.FC<SideBarProps> = ({classes}: SideBarProps): React.ReactElement => {
  const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false);

  const handleClickOpenAddTweet = () => {
    setVisibleAddTweet(true)
  }

  const onCloseAddTweet = () => {
    setVisibleAddTweet(false)
  }

  return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem} >
                <Link to='/home'>
                  <IconButton className={classes.logo} aria-label="" color='primary' >
                    <TwitterIcon className={classes.logoIcon} />
                  </IconButton>
                </Link>
            </li>

            <li className={classes.sideMenuListItem} >
                <div>
                  <SearchIcon className={classes.sideMenuListItemIcon} />
                  <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                      Поиск
                    </Typography>
                  </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem} >
                <div>
                  <NotificationsNoneOutlinedIcon className={classes.sideMenuListItemIcon} />
                  <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                      Уведомления
                    </Typography>
                  </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem} >
               <div>
                 <MailOutlineOutlinedIcon className={classes.sideMenuListItemIcon} />
                 <Hidden smDown>
                   <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                     Сообщения
                   </Typography>
                 </Hidden>
               </div>
            </li>
            <li className={classes.sideMenuListItem} >
                <div>
                  <BookmarkBorderOutlinedIcon className={classes.sideMenuListItemIcon} />
                  <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                      Закладки
                    </Typography>
                  </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem} >
                <div>
                  <FeaturedPlayListOutlinedIcon className={classes.sideMenuListItemIcon} />
                  <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                      Списки
                    </Typography>
                  </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem} >
                <div>
                  <PermIdentityOutlinedIcon className={classes.sideMenuListItemIcon} />
                  <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                      Профиль
                    </Typography>
                  </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
            <Button
              onClick={handleClickOpenAddTweet}
              className={classes.sideMenuTweetButton}
              variant='contained'
              color='primary'
              fullWidth>
              <Hidden smDown>Твитнуть</Hidden>
              <Hidden mdUp>
                <CreateIcon />
              </Hidden>
            </Button>
            <DialogWindow onClose={onCloseAddTweet} visible={visibleAddTweet}>
              <div style={{ width: 550 }}>
              <AddTweetForm maxRows={15} classes={classes}/>
              </div>
            </DialogWindow>
          </li>
        </ul>
    );
}