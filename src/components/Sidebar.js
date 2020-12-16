import React from 'react'
import {Link} from 'react-router-dom'
function Sidebar({id}) {
    return (
        <div className="sidebar_wrapper">
            <div className="sidebar_list_container">
                <Link to ="/" className="sidebar_list_items" ><p style={id===1?{background:'#FFC480'}:null}>Dashboard</p></Link>
                <Link to ="/blog" className="sidebar_list_items"><p style={id===2?{background:'#FFC480'}:null}>Blog</p></Link>
                <Link to ="#" className="sidebar_list_items"><p>Settings</p></Link>
            </div>
        </div>
    )
}

export default Sidebar
