import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import pokelist from "./pokelist";
import Pokemon from "./Pokemon";

function App() {
    return (

        < Router >
        < Switch >
        < Route exact path = "/"
        component = { pokelist }
        /> 
        <Route exact path = "/pokemon/:pokemonId"
        component = { Pokemon }
        /> 
        < /
        Switch >

        <
        /Router>
    );
}

export default App;