import React, {Component}from 'react'
import "./ExtraInfo.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const healthIcon =<FontAwesomeIcon icon={faHeart} />;


export default class ExtraInfo extends Component {
   
    state = {
        abilities:"",
        evs:"",
        genderRatioFemale:"",
        genderRatioMale:"",
        catchRate:"",
        eggGroups:"",
        hatchSteps:"",
        shape: "",
    };
    
    
    
    render() {
        console.log(this.props.info.abilities);
  
  return (
        <>
        <div className="extra_info_cointainer">
                        <div className="abilities_info_card" >
                        <h6 className="abilities_tag"  >{this.props.info.abilities}
                                    </h6>                                                   
                        </div>

                       <div  className="evs_info_card" >
                        
                        <h6 className="evs_tag">{this.props.info.evs}</h6>
                        </div>
      
                        <div className="egg_info_card" >
                            
                        <h6 className="egg_tag">{this.props.info.eggGroups}</h6>
    
                        </div>
                        </div>
</>
     );
  }
}

                          