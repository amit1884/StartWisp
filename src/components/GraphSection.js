import React from 'react'
import { Chart } from 'react-charts'
function GraphSection() {
    const data = React.useMemo(
        () => [
          {
            label: 'Series 1',
            data: [[0, 0], [1, 2], [2, 4], [3, 2]]
          },
          {
            label: 'Series 2',
            data: [[0, 0], [1, 5], [2, 3], [3, 6]]
          },
          {
            label: 'Series 3',
            data: [[0, 0], [1, 1], [2, 2], [3, 4]]
          },
        ],
        []
      )
     
      const axes = React.useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      )
    return (
        <div className="graph_wrapper">
            <div className="graph_area">
                <div className="graph_title">
                    <span style={{fontSize:'20px',color:'blueviolet',fontWeight:'500'}}>Sales Report</span>&nbsp;
                    <span style={{fontSize:'17px',color:'gray',fontWeight:'300'}}>Semptember 2020</span>
                </div>
                <div className="main_graph">
                <Chart data={data} axes={axes} style={{overflow:'hidden'}} />
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
