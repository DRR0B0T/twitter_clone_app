import React from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import {useStylesSignIn} from "../../pages/SignIn";

interface DialogWindowProps {
    title?: string;
    children: React.ReactNode;
    classes?: ReturnType<typeof useStylesSignIn>;
    visible?: boolean;
    onClose: () => void;
}

const DialogWindow: React.FC<DialogWindowProps> = ({
title,
children,
visible = false,
onClose,
}: DialogWindowProps): React.ReactElement | null => {
    if(!visible){//Если visible null то в дом дерево ничего не добавлять
        return null;
    }

    return (
        <Dialog  open={visible} onClose={onClose} aria-busy={true}>
        <DialogTitle id='form-dialog-title'>
            <IconButton onClick={onClose} color='secondary' aria-label='close'>
                <CloseIcon style={{ fontSize: 26 }} color='primary'></CloseIcon>
            </IconButton>
            {title}
        </DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
    </Dialog>)
}

export default DialogWindow;