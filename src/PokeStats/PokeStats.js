import React, {Component}from 'react'
import "./PokeStats.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faRulerVertical } from '@fortawesome/free-solid-svg-icons'

const shield = <FontAwesomeIcon icon={faShieldAlt} />;
const measureIcon = <FontAwesomeIcon icon={faRulerVertical} />;
export default class PokeStats extends Component {
   
    state = {
        stats: "",

    };
   
   
   
    
    render() {
  
  return (
  
 <div className="stats_card" >
                            <div className="container_stat" >
                                <h6 className="stat_name">HP</h6>
                                <div className="progress progress-moved">    
                                 <div className="progress-bar" style={{width:`${Math.floor(this.props.stats.hp)}px`}}>
                                </div>
                            </div>
                         </div>


                            <div className="container_stat" >
                                 <h6 className="stat_name">Attack</h6>
                                <div class="progress progress-moved1">    
                                <div className="progress-bar" style={{width:`${Math.floor(this.props.stats.attack)}px`}}></div>
                                </div>
                             </div>
                             
                             <div className="container_stat" >
  <div>{shield}</div>
                                 <h6 className="stat_name">Defense</h6>
                                <div class="progress progress-moved2">    
                                <div className="progress-bar" style={{width:`${Math.floor(this.props.stats.defense)}px`}} ></div>
                                </div>
                             </div>
                             
                             <div className="container_stat" >
                                 <h6 className="stat_name">Speed</h6>
                                <div class="progress progress-moved3">    
                                 <div className="progress-bar" style={{width:`${Math.floor(this.props.stats.speed)}px`}} ></div>
                                </div>
                            </div>

                            <div className="container_stat" >
                                 <h6 className="stat_name">Special Attack</h6>
                                <div class="progress progress-moved4">    
                                 <div className="progress-bar" style={{width:`${Math.floor(this.props.stats.specialAttack)}px`}} ></div>
                                </div>
                            </div>

                            <div className="container_stat" >
                                 <h6 className="stat_name">Special Defense</h6>
                                <div class="progress progress-moved5">    
                                 <div className="progress-bar" style={{width:`${Math.floor(this.props.stats.specialDefense)}px`}} ></div>
                                </div>
                            </div>
                   </div>
     );
  }
}

                          