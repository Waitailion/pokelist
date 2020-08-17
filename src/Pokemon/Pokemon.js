import React, { Component } from 'react'
import axios from "axios";
import './Pokemon.scss';
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeightHanging, faRulerVertical } from '@fortawesome/free-solid-svg-icons'
import PokeStats from "../PokeStats/PokeStats"

const TYPE_COLOR = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting:'82351D',
    fire:'E73B01',
    flying:'A3B3F7',
    ghost: '6060B2', 
    grass: '74C236',
    ground: 'D3B357',
    ice:'A3E7FD',
    normal:'C8C4BC',
    poison:'934594',
    psychic:'ED4882',
    rock:'B9A156',
    steel:'B5B5C3',
    water:'3295F6',
};

const weightIcon = <FontAwesomeIcon icon={faWeightHanging} />;
const measureIcon = <FontAwesomeIcon icon={faRulerVertical} />;



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
        eggGroup:"",
        abilities:'',
        genderRatioMale:"",
        genderRatioFemale: "",
        evs:"",
        shape:"",
        hatchSteps:'',
    };

    async componentDidMount() {
        const{pokemonId} = this.props.match.params;
        
        const pokemonUrl= `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
        const pokemonSpUrl=`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`;
        const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
        const altImg = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`
 
    
        const pokemonRes= await axios.get(pokemonUrl);


        const pokemonSpe= await axios.get(pokemonSpUrl);


        const name = pokemonSpe.data.names.[6].name;

        const alternativeName= pokemonRes.data.name;
        
        const altImgSprite= pokemonRes.data.sprites.front_default;
        
      

         let {hp, attack, defense, speed, specialAttack, specialDefense} = '';

        pokemonRes.data.stats.map(stat => { 
            switch(stat.stat.name) {
                case 'hp':
                    hp = stat['base_stat'];
                    break;
                case 'attack':
                    attack = stat['base_stat'];
                    break;
                case 'defense':   
                    defense = stat['base_stat'];
                    break;
                case 'speed':    
                    speed = stat['base_stat'];
                    break;
                case 'special-attack':
                    specialAttack = stat['base_stat'];
                    break;
                case 'special-defense':
                    specialDefense = stat['base_stat'];
                    break;
            }
        });
    
        const height =
            (pokemonRes.data.height / 10);

        const weight =
            Math.round(pokemonRes.data.weight / 10);

        const types = 
            pokemonRes.data.types.map(type => type.type.name);
            

        const abilities = pokemonRes.data.abilities.map(ability => {
            return ability.ability.name
            .toLowerCase()
            .split('-')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(', ');
        });

        const evs = pokemonRes.data.stats
          .filter(stat => {
            if (stat.effort > 0) {
                return true;
            }
            return false;
        })
        .map(stat => {
            return `${stat.effort} ${stat.stat.name
            .toLowerCase()
            .split('-')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')}`;
        })
        .join(', ');


        await axios.get(pokemonSpUrl).then(res => {
            let description = '';

            res.data.flavor_text_entries.some(flavor => {
                if (flavor.language.name === 'en') {
                    description = flavor.flavor_text;
                }
            });

            
            const shape= res.data.shape;
            
            const femaleRate = res.data['gender_rate'];
            const genderRatioFemale = 12.5 * femaleRate;
            const genderRatioMale = 12.5  * (8 - femaleRate);

            const catchRate = Math.round((100/255) * res.data['capture_rate']);
            
            const eggGroups = res.data['egg_groups'].map(group => {
                return group.name.toLowerCase()
                .split(' ')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');
            }).join(', ');


            const hatchSteps = 255 * (res.data['hatch_counter'] + 1);
            
            this.setState ({
                description,
                genderRatioFemale,
                genderRatioMale,
                catchRate,
                eggGroups,
                hatchSteps,
                shape,
                
            });
            
        });
       
       


        this.setState({
            imageUrl,
            altImg,
            pokemonId,
            altImgSprite,
            alternativeName,
            name,
            types,
            stats: {
                hp,
                attack,
                defense,
                speed,
                specialAttack,
                specialDefense,
            },
            height,
            weight,
            abilities,
            evs,
     
        });
        console.log(this.state.altImg)
    }  
    
    render() {
        return (
            <div> 
                
               
                
                  <div className="card"  >
                  <PokeStats stats={this.state.stats}/>
             <div className="background_card"></div>
                
            

                <div className="thumbnail">
                    <img className="pokemon_image_big" src = {this.state.imageUrl} alt=""/>
                </div>

                        <div className="right">

                                <h1 className="pokemon_name_info">{this.state.name}</h1>
                            <div className="type">
                                {this.state.types.map(type => (
                                    <h2 className="pokemon_type" key ={type} style={{backgroundColor: `#${TYPE_COLOR[type]}`}}>
                                    {type.toLowerCase()
                                    .split(' ')
                                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                    .join(' ')}
                                    </h2>                                                    ))}

                            </div>

                                <div className="separator"></div>
                                <div className="desc_container">
                                    <p className="pokemon_description">{this.state.description }</p>
                                    <div className="separator"></div>

                                <div className="icon_container">
                                    <div>{weightIcon}</div>
                                    <h6 className="weight_info">{this.state.weight} Kg</h6>
                                    <div>{measureIcon}</div>
                                    <h6 className="height_info">{this.state.height} Meters</h6>
                                </div>
                              
                            <h5 className='pokemon_id_num'>{this.state.pokemonId}</h5>
                        </div>
                             <div>
                                    <Link className="arrow arrow_left" to={`/pokemon/${parseInt(this.state.pokemonId)-1}`}></Link>
                           
                                    <Link className="arrow arrow_right" to={`/pokemon/${parseInt(this.state.pokemonId)+1}`}></Link>
                             </div>
                    </div>
                </div>
            </div>
           
        );
    }

}