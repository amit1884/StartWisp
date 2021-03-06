import React from 'react'

function Notifications() {
    const notification=[
        {id:1,user:'Admin',text:'Your faculty uploaded the syllabus',bgcolor:'#FFD9D9'},
        {id:2,user:'Student',text:'Your faculty uploaded the syllabus',bgcolor:'#D9FFE1'},
        {id:3,user:'Teacher',text:'Your faculty uploaded the syllabus',bgcolor:'#BA99FF'},
        {id:4,user:'Admin',text:'Your faculty uploaded the syllabus',bgcolor:'#F5E764'},
        {id:5,user:'Admin',text:'Your faculty uploaded the syllabus',bgcolor:' #F5E764'},
        {id:6,user:'Admin',text:'Your faculty uploaded the syllabus',bgcolor:' #F5E764'},
    ];
    return (
        <div className="notification_content">
            {
                notification.map(items=>{
                    return(
                        <div className="signle_notice"style={items.id===6?{borderBottom:'none'}:null}>
                            <div className="dp_container" style={{background:items.bgcolor}}>
                                
                            </div>
                            <div className="user_detail">
                                <p>{items.user}</p>
                                <p style={{fontSize:'12px',color:'gray'}}>{items.text}</p>
                            </div>
                        </div>
                    )
                })
            }     
        </div>
    )
}

export default Notifications
