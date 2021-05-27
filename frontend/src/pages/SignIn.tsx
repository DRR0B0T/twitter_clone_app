import React from 'react';
import {makeStyles, Typography, Button} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import DialogActions from "@material-ui/core/DialogActions";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative',
    },
    blueSideBigIconTwitter: {
        position: 'absolute',
        left: '40%',
        top: '55%',
        transform: 'translate(-50%, -50%)',
        width: '250%',
        height: '350%',

    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        marginTop: 60,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: 20,
        }
    },
    blueSideListInfoItem: {
        marginBottom: 35,
    },
    blueSideListInfoIcon: {
      fontSize: 30,
      marginRight: 15,
    },
    loginSide: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',

    },
    loginSideTwitterIcon: {
        fontSize: 43,

    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 60,
        marginTop: 30,
    },

}))

function SignIn() {
    const [open, setOpen] = React.useState(false)
    const classes =useStyles()

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return <div className={classes.wrapper}>
        <section className={classes.blueSide}>
        <TwitterIcon color='primary' className={classes.blueSideBigIconTwitter} />
            <ul className={classes.blueSideListInfo}>
                <li className={classes.blueSideListInfoItem}>
                    <Typography variant='h6'>
                        <SearchIcon className={classes.blueSideListInfoIcon}/>
                        Читайте о том, что вам интересно.
                    </Typography>
                </li>
                <li className={classes.blueSideListInfoItem}>
                    <Typography variant='h6'>
                        <PeopleOutlineIcon className={classes.blueSideListInfoIcon}/>
                        Узнайте, о чём говорят в мире.
                    </Typography>
                </li>
                <li className={classes.blueSideListInfoItem}>
                    <Typography variant='h6'>
                        <ChatBubbleOutlineIcon className={classes.blueSideListInfoIcon}/>
                        Присоединяйтесь к общению.
                    </Typography>
                </li>
            </ul>
        </section>
        <section className={classes.loginSide}>
            <div className={classes.loginSideWrapper} >
                <TwitterIcon color='primary' className={classes.loginSideTwitterIcon} />
                <Typography gutterBottom className={classes.loginSideTitle} variant='h4'>
                    Узнайте что происходит в мире прямо сейчас
                </Typography>
                <Typography>
                    <b>Присоединяйтесь к Твиттеру прямо сейчас</b>
                </Typography>
                <br/>
                <Button style={{ marginBottom: 20 }} variant='contained' color='primary' fullWidth>
                    Зарегистрироваться
                </Button>

                <Button onClick={handleClickOpen} variant='outlined' color='primary' fullWidth>
                    Войти
                </Button>

                <Dialog open={open} onClose={handleClose} aria-busy={true}>
                    <DialogTitle id='form-dialog-title'>
                        <IconButton onClick={handleClose} color='secondary' aria-label='close'>
                            <CloseIcon style={{ fontSize: 26 }} color='primary'></CloseIcon>
                        </IconButton>
                        Войти в Твиттер
                    </DialogTitle>
                    <DialogContent>

                        <FormControl component='fieldset' fullWidth>
                            <FormGroup aria-label='position' row>
                                <TextField
                                autoFocus
                                margin='dense'
                                id='email'
                                label='E-mail'
                                type='email'
                                fullWidth
                                />
                                <TextField
                                autoFocus
                                margin='dense'
                                id='password'
                                label='Пароль'
                                type='password'
                                fullWidth
                                />

                            </FormGroup>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color='primary'>
                            Cancel
                        </Button>
                        <Button variant='contained' color='primary'>
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </section>
    </div>;
}

export default SignIn;