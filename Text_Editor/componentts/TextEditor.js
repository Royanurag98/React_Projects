import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
// import PropTypes from 'prop-types';

function TextEditor(props) {
   

    const [Changes, setChange]= useState("");
     let text;
    function toUpper(){
       
        let newText=Changes.toUpperCase();
        setChange(newText)
    }
    function handleonChange(){
        setChange(event.target.value);
    }
    const toLower=()=>{
        let thisText=Changes.toLowerCase();
        setChange(thisText)
    }
    const toClear=()=>{
        let thisText="";
        setChange(thisText)
    }
    const toCopy=()=>{
        navigator.clipboard.writeText(Changes)
        
        
         alert("copyed")
        // setChange(thisText)
    }
    return (
        <div class="card">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={Changes} onChange={handleonChange} placeholder='Enter your text'/>
               <div className='prevue' >
               <h1 style={{fontSize:"25px", }}>Prevew Your Text:</h1>
                <p style={{margin:"0px", color:"aqua"}}> {Changes} </p>
               </div>
            </div>
            <div className='summery'>
            <h1>Your text Summery</h1>
           
            
            <div className='b1'> Words : {Changes.split(" ").length}</div>
                    <div className='b1'>Character : {Changes.length}</div>
                    <div className='b1'> <p>Words Per Minuts :{ Changes.split(" ").length*0.008}</p></div>

            </div>
            <div className='btnBox'> 
            <a href="#" class="btn btn-primary"  onClick={toUpper}>Convert to Uppercase </a>
            <a href="#" class="btn btn-primary"onClick={toLower}>Convert to Lowercase </a>
            <a href="#" class="btn btn-primary"onClick={toClear} >Clear Text</a>
            <a href="#" class="btn btn-primary"onClick={toCopy}>Copy Text</a>
            <a href="#" class="btn btn-primary">Remove Extra Space</a>
            </div>
        </div>
    );
}

export default TextEditor;
