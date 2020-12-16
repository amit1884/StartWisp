import React from 'react'
import Notifications from './Notifications'

function NotificationSection() {
    return (
        <div className="notication_container">
            <div className="notification_box">
                <div className="notification_tab">
                    <div style={{background:'#fff',width:'50%',borderRadius:'10px',padding:'10px'}}>Notifications</div>
                    <div style={{background:'#fafafa',width:'50%',borderRadius:'10px',padding:'10px'}}>Events</div>
                </div>
                <Notifications/>
                <p style={{textAlign:'center',fontSize:'10px',cursor:'pointer'}}>View All</p>
            </div>
        </div>
    )
}

export default NotificationSection
