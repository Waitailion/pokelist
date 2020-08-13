import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom"
import './App.css';
import PokeList from "./PokeList";
import Pokemon from "./Pokemon";
import Header from "./Header";



function App() {
    return (
    
        < Router >
             <Header/>
            < Switch >
                < Route exact path = "/" component = { PokeList }/> 
                < Route exact path = "/page" component = { PokeList }/> 
                <Route exact path = "/pokemon/:pokemonId" component = { Pokemon }/> 
            </Switch >
       </Router>
       
    );
}

export default App;