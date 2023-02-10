import React, {Component} from 'react';
import "../styles/global.css";
import Header from "../components/Header";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState.js";

function MyApp ({ Component, pageProps }) {
    const initialState =  useInitialState(); 
    return (
        <AppContext.Provider value={initialState}>
            <Header/>
            <Component {...pageProps} />
        </AppContext.Provider>
    );
}

export default MyApp;