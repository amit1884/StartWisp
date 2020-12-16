import React from 'react'
import g1 from '../assets/2.png'
import g2 from '../assets/3.png'
function Stat() {
    return (
        <div className="outer_container">
            <div className="index">
                <h5 style={{textAlign:'center',borderBottom:'1px solid gray',color:'gray'}}>This Month</h5>
                <div style={{padding:'10px',color:'#0F26F2',display:'flex'}}>
                <p style={{fontSize:'30px'}}>+7.8%</p>
                <img src ={g1} alt="g1"  style={{width:'50%',height:'50px'}}/>
                </div>
            </div><br/>
            <div className="index">
                <h5 style={{textAlign:'center',borderBottom:'1px solid gray',color:'gray',}}>Last Month</h5>
                <div style={{padding:'10px',color:'#0F26F2',display:'flex'}}>
                <p style={{fontSize:'30px'}}>+67.4%</p>
                <img src ={g2} alt="g1"style={{width:'40%',height:'50px'}}/>
                </div>
            </div>
        </div>
    )
}

export default Stat
