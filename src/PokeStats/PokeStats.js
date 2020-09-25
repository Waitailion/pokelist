import React, {Component}from 'react'
import "./PokeStats.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faTachometerAlt, faHandSparkles, faBullseye, faHeart, faVectorSquare } from '@fortawesome/free-solid-svg-icons'


const healthIcon =<FontAwesomeIcon icon={faHeart} />;
const bullseye = <FontAwesomeIcon icon={faBullseye} />;
const shield = <FontAwesomeIcon icon={faShieldAlt} />;
const speed = <FontAwesomeIcon icon={faTachometerAlt} />;
const specialA =<FontAwesomeIcon icon={faHandSparkles} />;
const specialD =<FontAwesomeIcon icon={faVectorSquare} />;

export default class PokeStats extends Component {
   
    state = {
        stats: "",

    };
   
   
   
    
    render() {
  
  return (
  
 <div className="stats_card" >


                           


                         <div className="container_stat" >
                                    <h6 className="stat_name">{healthIcon} HP</h6>
                                <div className="progress progress-moved">    
                                 <div className="progress-bar" style={{width:`${Math.floor(this.props.stats.hp)}px`}}>
                                </div>
                            </div>
                         </div>


                            <div className="container_stat" >
                                 <h6 className="stat_name">{bullseye} Attack</h6>
                                <div class="progress progress-moved1">    
                                <div className="progress-bar" style={{width:`${Math.floor(this.props.stats.attack)}px`}}></div>
                                </div>
                             </div>
                             
                             <div className="container_stat" >
                                 <h6 className="stat_name">{shield} Defense</h6>
                                <div class="progress progress-moved2">    
                                <div className="progress-bar" style={{width:`${Math.floor(this.props.stats.defense)}px`}} ></div>
                                </div>
                             </div>
                             
                             <div className="container_stat" >
                                 <h6 className="stat_name">{speed} Speed</h6>
                                <div class="progress progress-moved3">    
                                 <div className="progress-bar" style={{width:`${Math.floor(this.props.stats.speed)}px`}} ></div>
                                </div>
                            </div>

                            <div className="container_stat" >
                                 <h6 className="stat_name">{specialA} Special Attack</h6>
                                <div class="progress progress-moved4">    
                                 <div className="progress-bar" style={{width:`${Math.floor(this.props.stats.specialAttack)}px`}} ></div>
                                </div>
                            </div>

                            <div className="container_stat" >
                                     <h6 className="stat_name">{specialD} Special Defense</h6>
                                <div class="progress progress-moved5">    
                                 <div className="progress-bar" style={{width:`${Math.floor(this.props.stats.specialDefense)}px`}} ></div>
                                </div>
  </div>
                   </div>
     );
  }
}

                          