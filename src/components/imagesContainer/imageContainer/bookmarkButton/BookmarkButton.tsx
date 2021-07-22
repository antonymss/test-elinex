import {Button, CardActions, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    button: {
        backgroundColor: '#bfbfbf',
        color: '#f5f6ed',
        padding: '.5em',
        "&:hover": {
            backgroundColor: '#1d7ccd',
            color: '#E7FF73'
        }
    }
})

export type BookmarkButtonPropsType = {
    inBookmark: boolean
    addToBookmark: () => void
    removeToBookmark: () => void
}

export const BookmarkButton = ({ inBookmark, addToBookmark, removeToBookmark} : BookmarkButtonPropsType) => {

    const classes = useStyles()

    return (<>
        {inBookmark
            ? <CardActions>
                <Button onClick={removeToBookmark} className={classes.button} size='small'>
                    <Typography>remove!</Typography>
                </Button>
            </CardActions>
            : <CardActions>
                <Button onClick={addToBookmark} className={classes.button} size='small'>
                    <Typography>bookmark it!</Typography>
                </Button>
            </CardActions>
        }
    </>)
}