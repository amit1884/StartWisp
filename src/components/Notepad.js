import React ,{useState}from 'react'

function Notepad() {
    const [Title,setTitle]=useState('')
    const [Body,setBody]=useState('')
    const[Open, setOpen]=useState(false)
    const [Data,setData]=useState([{
        title:'Title',
        text:'Title Lorem ipsum dolor sit am...'
    },
    {
        title:'Title',
        text:'Title Lorem ipsum dolor sit am...'
    }])
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const SubmitHandler=(e)=>{
        e.preventDefault()
      setData([...Data,{
          title:Title,
          text:Body
      }])
        setOpen(false)
    }
    
    return (
        <div className="notepad_box">
            <p style={{fontSize:'22px',fontWeight:'500',color:'brown'}}>Notepad</p><br/>
            <div className="notices" style={{overflowY:'auto',height:'70%'}}>
                {
                    Data.map(items=>{
                        return(
                            <p key={items.id} style={{fontSize:'13px',padding:'5px'}}><b>{items.title}</b>&nbsp;{items.text}</p>
                        )
                    })
                }
            </div>
            <button className="add_btn" onClick={handleOpen}>+</button>
                {
                    Open?
                    <div className="notepad_form_container">
                    <form className="notepad_form" onSubmit={SubmitHandler}>
                        <input 
                        className="input_field"
                        style={{width:'94%',height:'40px'}}
                        onChange={(e)=>setTitle(e.target.value)}
                        value={Title}
                        type="text"placeholder="Title"/>
                        <input 
                        className="input_field"
                        style={{width:'94%',height:'50px'}}
                        onChange={(e)=>setBody(e.target.value)}
                        value={Body}
                        type="text"placeholder="Body"/>
                        <button 
                            style={{
                                border:'none',
                                background:'#FFC480',
                                color:'#FF6C40',
                                outline:'none',
                                textAlign:'center',
                                padding:'10px',
                                marginLeft:'20px',
                                borderRadius:'10px',
                                cursor:'pointer'
                            }}
                                type="submit"
                        >Save</button>&nbsp;&nbsp;&nbsp;
                         <button 
                            style={{
                                border:'none',
                                background:'#FF6C40',
                                color:'#FFC480',
                                outline:'none',
                                textAlign:'center',
                                padding:'10px',
                                marginright:'90%',
                                borderRadius:'10px',
                                cursor:'pointer',
                                float:'right'}}
                        type="submit"
                        onClick={handleClose}>Cancel</button>
                    </form>
                    </div>:null
                }
        </div>
    )
}

export default Notepad
