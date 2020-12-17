import React ,{useState}from 'react'
import Editor from './Editor'
function Notepad() {
    // const [Title,setTitle]=useState('')
    // const [Body,setBody]=useState('')
    const[Open, setOpen]=useState(false)
    const [Data,setData]=useState([{
        id:1,
        text:'<p><b>Title</b> Lorem ipsum dolor sit am...</p>'
    },
   ])

   const puretext = text => {
    return { __html: text };
  };
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
   function SubmitHandler(data){
       console.log(data)
       setData([...Data,{id:Data.length,text:data}])
       setOpen(false)
   }
    
    return (
        <div className="notepad_box">
            <p style={{fontSize:'22px',fontWeight:'500',color:'brown'}}>Notepad</p><br/>
            <div className="notices" style={{overflowY:'auto',height:'70%'}}>
                {
                    Data.map(items=>{
                        return(
                            <p 
                             key={items.id}
                             style={{fontSize:'13px',padding:'5px'}} 
                             dangerouslySetInnerHTML={puretext(items.text)}
                             />
                        )
                    })
                }
            </div>
            <button className="add_btn" onClick={handleOpen}>+</button>
                {
                    Open?
                    <div className="notepad_form_container">
                    <Editor submitHandler={SubmitHandler} close={handleClose}/>
                    </div>:null
                }
        </div>
    )
}

export default Notepad
