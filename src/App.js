import React from 'react';
import { HashRouter as Router, Route,  Switch } from "react-router-dom"
import './App.css';
import PokeList from "./PokeList/PokeList";
import Pokemon from "./Pokemon/Pokemon";
import Header from "./Header/Header";



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