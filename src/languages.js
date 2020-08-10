import React, { Component } from 'react'
import axios from "axios";
import './PokeCard.scss'

const TYPE_COLOR = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting:'82351D',
    fire:'E73B0C',
    flying:'A3B3F7',
    ghost: '6060B2', 
    grass: '74C236',
    ground: 'D3B357',
    ice:'A3E7FD',
    normal:'C8C4BC',
    poison:'934594',
    pyschic:'ED4882',
    rock:'B9A156',
    steel:'B5B5C3',
    water:'3295F6',
};


export default class Pokemon extends Component {
    state = {
        name:'',
        pokemonId:'',
        imageUrl:'',
        types: [],
        description : '',
        stats: {
            hp:'',
            attack:'',
            defense:'',
            speed:'',
            specialAttack:'',
            specialDefense:'',
            
        },
        height:"",
        weight:'',
    };

    async componentDidMount() {
        const{pokemonId} = this.props.match.params;
        
        const pokemonUrl= `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
        const pokemonSpUrl=`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`;
 
    
        const pokemonRes= await axios.get(pokemonUrl);

        const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`
        
        const name = pokemonRes.data.name;
      console.log(name);

        
      


        await axios.get(pokemonSpUrl).then(res => {
            let description = '';
            console.log(res.data.names.[0].name);
            console.log(res.data.names);


            res.data.flavor_text_entries.some(flavor => {
                if (flavor.language.name === 'ja') {
                    description = flavor.flavor_text;
                    return;
                }
            });

            
            
            this.setState ({
                description,
              
            });
            
        });


        this.setState({
            imageUrl,
            pokemonId,
            name,
        
        });
    }  
    
    render() {
        return (
            <div >
          
            
            
            </div>
        );
    }

}