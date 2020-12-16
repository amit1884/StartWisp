import React from 'react'
import graph from '../assets/graph.PNG'
function SmallGraph() {
    return (
        <div className="outer_container">
          <div className="small_graph">
              <img src ={graph} alt="min-graph" style={{width:'100%',height:'96%'}}/>
         </div><br/>
         <div className="index">
             <span style={{fontSize:'20px'}}>Index</span><span style={{float:'right',fontSize:'30px'}}>23</span>
        </div>  
        </div>
    )
}

export default SmallGraph
