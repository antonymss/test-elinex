import React from 'react';
import {Header} from "./components/common/header/Header";
import {Navigation} from "./components/common/navigation/Navigation";
import {Routes} from "./routes/Routes";
import {Footer} from "./components/common/footer/Footer";
import {LinearProgress} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {RootStateType} from "./bll/store";

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'absolute',
        top: '64px',
        backgroundColor: '#f70025',
    },
    bar2Indeterminate: {
        backgroundColor: '#0cd8ea'
    },
    bar1Indeterminate: {
        backgroundColor: '#f6f6f5'
    }
})

const App = () => {

    const isLoad = useSelector<RootStateType, boolean | undefined>(state => state.process.isLoading)

    const classes = useStyles()

    return (<>
        <Header/>
        {isLoad && <LinearProgress classes={classes}/> }
        <div style={{display: 'flex'}}>
            <Navigation/>
            <Routes/>
        </div>
        <Footer/>
    </>)
}

export default App;
