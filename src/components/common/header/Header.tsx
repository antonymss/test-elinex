import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {AppBar, IconButton, Modal} from "@material-ui/core";
import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Login} from "../login/Login";

const useStyles = makeStyles({
    bar: {
        backgroundColor: '#7f7d7d',
        padding: '1em 2em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        padding: '0 .5em',
        color: "white"
    },
    title: {
        fontSize: '1.5em',
        color: '#f3f3ec',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export const Header = () => {

    const classes = useStyles()

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <AppBar component='header' className={classes.bar}>
            <span className={classes.title}>Image Finder</span>
            <IconButton className={classes.button} onClick={handleOpen}>
                <AccountCircleIcon/>
            </IconButton>
            <Modal className={classes.modal} aria-labelledby='Google bookmark'
                open={open}>
                <Login handleClose={handleClose} />
            </Modal>
        </AppBar>
    )
}