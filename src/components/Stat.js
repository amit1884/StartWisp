import React from 'react'

function Stat() {
    return (
        <div className="outer_container">
            <div className="index">
                <h5 style={{textAlign:'center',borderBottom:'1px solid gray',color:'gray'}}>This Month</h5>
                <div style={{padding:'10px',color:'#0F26F2'}}>
                <h3>+7.8%</h3>
                </div>
            </div><br/>
            <div className="index">
                <h5 style={{textAlign:'center',borderBottom:'1px solid gray',color:'gray'}}>Last Month</h5>
                <div style={{padding:'10px',color:'#0F26F2'}}>
                <h3>+67.4%</h3>
                </div>
            </div>
        </div>
    )
}

export default Stat
