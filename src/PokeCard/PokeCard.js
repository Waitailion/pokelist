import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./PokeCard.scss";
import pokeball from '../Images/pokeball.gif';






export default class PokeCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonId: '',

    };

    componentDidMount() {
        const { name, url } = this.props;
        const pokemonId = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`



        this.setState({
            name,
            imageUrl,
            pokemonId,
            imageLoading: true,
            toManyRequest: false,
        });

    }

    render() {

        return (

        <Link to = { `pokemon/${this.state.pokemonId}` } >
      < div className = "card_container" >
         <div className="card_img_container">
             {this.state.imageLoading ? (
                 <img src={pokeball} style={{width: '5em'}} className="loading_gif" alt=" "></img>
             ):null}
            <img className = "card_pokemon_img"
            onLoad={() => this.setState({imageLoading: false})}
            onError={() => this.setState({toManyRequest: true})}
            src = { this.state.imageUrl } alt=""/> 
            {this.state.toManyRequest ? (
                <h6 className="error_img"><span>To Many Request</span>
                </h6>
            ):null}
         </div>
            <div className= "pokemon_card_info"> 
             <h4 className="index_tag">Index</h4>
             < h5 className = "pokemon_id">
                  { this.state.pokemonId }
             </h5> 
             <h5 className = "pokemon_name_card" > {
                this.state.name
                .toLowerCase()
                .split("-")
                .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                .join(' ')
                 } 
             </h5> 
            </div>
      </div> 
        </Link >

        )
    }
}