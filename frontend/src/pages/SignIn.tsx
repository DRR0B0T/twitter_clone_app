import React from 'react';
import {makeStyles, Typography, Button} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import DialogWindow from "../components/DialogWindow/DialogWindow";


export const useStylesSignIn = makeStyles((theme) => ({
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
        left: '70%',
        top: '55%',
        transform: 'translate(-50%, -50%)',
        width: '175%',
        height: '175%',
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        marginTop: 60,
        width: 420,
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
    loginSideFormField: {
        marginBottom: 18,
    },
    loginSideRegisterField: {
        marginBottom: theme.spacing(6),
    },
    loginSideRegisterFormControl: {
        marginBottom: theme.spacing(4),
    }

}))

export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStylesSignIn()
    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>()

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn')
    }
    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp')
    }

    const handleCloseModal = (): void => {
        setVisibleModal(undefined )
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
                <Button onClick={handleClickOpenSignUp} style={{ marginBottom: 20 }} variant='contained' color='primary' fullWidth>
                    Зарегистрироваться
                </Button>

                <Button onClick={handleClickOpenSignIn} variant='outlined' color='primary' fullWidth>
                    Войти
                </Button>

                <DialogWindow
                    visible={visibleModal === 'signIn'}
                    onClose={handleCloseModal}
                    classes={classes}
                    title='Войти в аккаунт'>
                    <FormControl className={classes.loginSideRegisterFormControl} component='fieldset' fullWidth>
                        <FormGroup aria-label='position' row>
                            <TextField
                                className={classes.loginSideFormField}
                                autoFocus
                                id='email'
                                label='E-mail'
                                type='email'
                                fullWidth
                                variant='filled'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                className={classes.loginSideFormField}
                                variant='filled'
                                autoFocus
                                margin='dense'
                                id='password'
                                label='Пароль'
                                type='password'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                            />
                            <Button
                                onClick={handleCloseModal}
                                variant='contained'
                                color='primary'
                                fullWidth
                            >
                                Войти
                            </Button>
                        </FormGroup>
                    </FormControl>
                </DialogWindow>

                <DialogWindow
                    visible={visibleModal === 'signUp'}
                    onClose={handleCloseModal}
                    classes={classes}
                    title='Создайте учётную запись'>
                    <FormControl className={classes.loginSideRegisterFormControl} component='fieldset' fullWidth>
                        <FormGroup aria-label='position' row>
                            <TextField
                                className={classes.loginSideRegisterField}
                                autoFocus
                                id='name'
                                label='Имя'
                                type='name'
                                fullWidth
                                variant='filled'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                className={classes.loginSideRegisterField}
                                autoFocus
                                id='e-mail'
                                label='E-mail'
                                type='e-mail'
                                fullWidth
                                variant='filled'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                className={classes.loginSideRegisterField}
                                variant='filled'
                                autoFocus
                                margin='dense'
                                id='password'
                                label='Пароль'
                                type='password'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                            />
                            <Button
                                onClick={handleCloseModal}
                                variant='contained'
                                color='primary'
                                fullWidth
                            >
                                Далее
                            </Button>
                            <br/>
                            <br/>

                        </FormGroup>
                    </FormControl>
                </DialogWindow>

            </div>
        </section>
    </div>;
}

