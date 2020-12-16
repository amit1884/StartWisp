import React from 'react'
import {Link} from 'react-router-dom'
function Sidebar({id}) {
    return (
        <div className="sidebar_wrapper">
            <div className="sidebar_list_container">
                <Link to ="/" className="sidebar_list_items"><p style={id===1?{background:'#FFC480'}:null}>&nbsp;<i className="fa fa-home"></i>&nbsp;&nbsp;Dashboard</p></Link>
                <Link to ="/blog" className="sidebar_list_items"><p style={id===2?{background:'#FFC480'}:null}><i className="fa fa-graduation-cap"></i>&nbsp;&nbsp;Blog</p></Link>
                <Link to ="#" className="sidebar_list_items"><p><i className="fa fa-gear"></i>&nbsp;&nbsp;Settings</p></Link>
            </div>
        </div>
    )
}

export default Sidebar
