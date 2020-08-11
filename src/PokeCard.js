import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./PokeCard.scss"




const StyledLink = styled(Link)
`
text-decoration:none;

`;

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
            pokemonId
        });

    }

    render() {

        return (

        < StyledLink to = { `pokemon/${this.state.pokemonId}` } >
      < div className = "card_container" >
         <div className="img_contain">
            <img className = "pokemon_img"
            src = { this.state.imageUrl } alt=""/> 
         </div>
            <div className= "pokemon_card_info"> 
             <h5 className = "pokemon_nam" > {
                this.state.name
                .toLowerCase()
                .split(" ")
                .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                .join(' ')
                 } 
             </h5> 
             <h4 className="index_tag">Index</h4>
             < h5 className = "pokemon_id">
                  { this.state.pokemonId }
             </h5> 
            </div>
      </div> 
        </StyledLink >

        )
    }
}