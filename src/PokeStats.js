 
 /*                           <div className="container" >
                                <h6 className="stat_name">HP</h6>
                                <div class="progress1 progress-moved">    
                                 <div className="progress-bar1" style={{width:`${Math.floor(this.state.stats.hp)}px`}} ></div>
                                 </div>
                             </div>
                             
                             <div className="container" >
                                 <h6 className="stat_name">Speed</h6>
                                <div class="progress2 progress-moved">    
                                <div className="progress-bar2" style={{width:`${this.state.stats.speed}px`}} ></div>
                                </div>
                             </div>
                             
                             <div className="container" >
                                 <h6 className="stat_name">Defense</h6>
                                <div class="progress3 progress-moved">    
                                 <div className="progress-bar3" style={{width:`${this.state.stats.defense}px`}} ></div>
                                </div>
                            </div>

                            
.progress2 {
    padding: 1px;
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.25);  
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 1), 0 1px rgba(0, 0, 0, 1);
    -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 1), 0 1px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0 2px 2px rgba(0, 0, 0, 1), 0 1px rgba(0, 0, 0, 1);
  }
  
  .progress-bar2 {
    height: 8px;
    border-radius: 30px;
  
    border-radius: 30px 0px 0px 30px;
    background-image: 
      linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
    transition: 0.4s linear;  
    transition-property: width, background-color;    
  }
  
  .progress-moved .progress-bar2 {
    width: 85%; 
    background-color: #9547ef;  
    animation: progress2Animation 6s;
    border-radius: 30px;
  
  }
  
  .progress3 {
    padding: 1px;
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.25);  
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 1), 0 1px rgba(0, 0, 0, 1);
    -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 1), 0 1px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0 2px 2px rgba(0, 0, 0, 1), 0 1px rgba(0, 0, 0, 1);
  }
  
  .progress-bar3 {
    height: 8px;
    border-radius: 30px 0px 0px 30px;
    border-radius: 30px;
  
    background-image: 
      linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
    transition: 0.4s linear;  
    transition-property: width, background-color;    
  }
  
  .progress-moved .progress-bar3 {
    width: 85%; 
    background-color: #4cd964;  
    border-radius: 30px;
  
    animation: progress3Animation 6s;
  }*/