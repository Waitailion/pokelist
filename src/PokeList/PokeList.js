import React, {Component} from "react";
import axios from "axios";
import PokeCard from "../PokeCard/PokeCard";
import "./PokeList.scss";





export default class PokeList extends Component {
 


 

    state = {
        url: `https://pokeapi.co/api/v2/pokemon?limit=30`,
        pokemon: null
        
    };
    
  
        
    
    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({pokemon: res.data[`results`]});
    



        
    }
 


render() {
    return(
        <React.Fragment>
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
                <div>
                <h1 className="loading_title">Loading Pokemon</h1>
                </div>
            )}
           
        </React.Fragment>
        
        )
    }
}; 