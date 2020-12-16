import React from 'react'
import avatar from '../assets/djalok.jpg'
function Posts({Posts}) {
    console.log(Posts)
    return (
        <div className="post_container">
            {
                Posts.map(items=>{
                    return(
                        <div className="single_post_container">
                            <div className="common_content">
                            <div className="profile_pic">
                                <img src={avatar} alt="profile"/>
                            </div>
                            <div className="content">
                                <div className="header"><b>{items.username}</b><span style={{float:'right'}}>{items.time}</span></div>
                                <div className="post_text">
                                    {items.post}
                                </div>
                            </div>
                            </div>
                            {
                                items.username==="Teacher"?
                                <div className="comment_section">
                                    <div className="comm_profile">
                                    <img src ={avatar} alt="profile"/>
                                    </div>
                                    <form>
                                        <input className="comment_input" type="text" placeholder="Write a comment ..."/>&nbsp;
                                        <button id ="send_btn"><i class="fa fa-send" style={{fontSize:'25px',color:'#733D47'}}></i></button>
                                    </form>
                                </div>
                                :null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Posts
