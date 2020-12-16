import React ,{useState}from 'react'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'
import avatar from '../assets/djalok.jpg'
function Blog() {
    const [Text,setText]=useState('')
    const [PostData,setPostData]=useState([
        {
            id:1,
            username:'Teacher',
            img:avatar,
            time:'12:40 PM',
            post:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            id:2,
            username:'Username',
            img:avatar,
            time:'12:40 PM',
            post:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        },
        {
            id:3,
            username:'Username',
            img:avatar,
            time:'12:40 PM',
            post:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        }
    ])
    const handleSubmit=(e)=>{
        e.preventDefault()
        setPostData([...PostData,{
            id:4,
            username:'Username',
            img:avatar,
            time:'08:45 AM',
            post:Text
        }])
        setText('');
    }
    return (
        <div className="main_wrapper">
            <Sidebar id={2}/>
            <div className="blog_container">
               <div className="form_container">
                    <form onSubmit={handleSubmit}>
                        <input 
                        className="input_field"
                        type="text" 
                        placeholder="Share something with your class ..."
                        onChange={(e)=>setText(e.target.value)}
                        value={Text}
                        />
                        <button id="cancel_btn">Cancel</button>
                        <button id="share_btn"><span id="txt">Share</span><span id="icn">V</span></button>
                        <button id="icon_btn" type="submit">i</button>
                    </form>
               </div>
               <Posts Posts={PostData}/>
            </div>
        </div>
    )
}

export default Blog
