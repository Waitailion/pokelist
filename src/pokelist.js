import React, {Component} from "react";
import ReactDom from "react-dom" ;
import { render } from "@testing-library/react";
import axios from "axios";
import PokeCard from "./PokeCard";
import "./pokelist.scss";
import Pagination from "./pages";
import pokemon from "./pokemon.png"; 




export default class PokeList extends Component {
 


 

    state = {
        url: `https://pokeapi.co/api/v2/pokemon/?limit=100`,
        pokemon: null
    };
    
  
        
    
    async componentDidMount() {
        const res = await axios.get(this.state.url);
       
     
        this.setState({pokemon: res.data[`results`]})
        
        
        console.log(this);
 }
 


render() {
    return(
        <React.Fragment>
            <div className="header" >
                <img className="pokeimg"src={pokemon}/>
                </div>
            {this.state.pokemon ? (
                
                <div className="all_cards">
                {this.state.pokemon.map(pokemon => (
                    <PokeCard
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                    
                    />
                    ))}

            </div> 
            ) :(
                <h1>Loading Pokemon</h1>
                )}
           
        </React.Fragment>
        
        )
    }
}; 