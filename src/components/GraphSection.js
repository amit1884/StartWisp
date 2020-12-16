import React from 'react'

function GraphSection() {
    return (
        <div className="graph_wrapper">
            <div className="graph_area">
                <div className="graph_title">
                    <span style={{fontSize:'20px',color:'blueviolet',fontWeight:'500'}}>Sales Report</span>&nbsp;
                    <span style={{fontSize:'17px',color:'gray',fontWeight:'300'}}>Semptember 2020</span>
                </div>
                <div className="main_graph">

                </div>
            </div>
            <div className="stat_area">
                <div className="stat_heading">
                    <h2 style={{padding:'5px 10px',color:'#fff'}}>17 Sep</h2>
                </div>
                <div className="stats">
                    <div className="stat_1">
                        <p>$1,204.33</p><br/>
                        <p style={{fontSize:'16px'}}>Revenue</p>
                    </div>
                    <div className="stat_2">
                        <p>33</p><br/>
                        <p style={{fontSize:'16px'}}>Quotation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphSection
