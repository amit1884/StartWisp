import React ,{useState}from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Editor({submitHandler,close}){
    const [EditorData,setEditorData]=useState('')
          return (
            <div className="App">
                <CKEditor
                    editor={ ClassicEditor }
                    data={EditorData}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        setEditorData(editor.getData());
                        // console.log( { event, editor, EditorData } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                <button 
                style={{
                    padding:'10px',
                    margin:'10px',
                    border:'none',
                    outline:'none',
                    background:'#FF6C40',
                    color:'#fff',
                    cursor: 'pointer',
                    borderRadius:'10px'
                }}
                onClick={()=>submitHandler(EditorData)}>Save</button>
                <button 
                style={{
                    padding:'10px',
                    margin:'10px',
                    border:'none',
                    outline:'none',
                    background:'#FFC480',
                    color:'#FF6C40',
                    cursor: 'pointer',
                    borderRadius:'10px',
                    float:'right'
                }}
                onClick={()=>close()}>Cancel</button>
            </div>
        );
}

export default Editor;