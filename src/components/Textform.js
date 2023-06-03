
import React,{useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState(" ");

 
 
  const handleupclick  =()=>{
            let newtext = text.toUpperCase();
            setText(newtext)
  }
  const handleloclick  =()=>{
            let newtext = text.toLowerCase();
            setText(newtext)
  }
  const handlecopy =() => {
    navigator.clipboard.writeText(text);

  }
  const cleartext  =()=>{
    let newtext = ' '
    setText(newtext)
  }
  const handleOnChange  =(event)=>{
            console.log("on change  was clicked")
            setText(event.target.value)
  }
        

  return (
    <>
    
     <div className="container"style={{colour:props.mode==='light'?'dark':'light'}}>
        <h2>{props.heading} </h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="TEXTBOX" rows="8"></textarea>
        
              <button type="button" className="btn btn-info mx-2 my-2"  onClick={handleupclick}>convert to uppercase</button>
              <button type="button" className="btn btn-info mx-2 my-2"  onClick={handleloclick}>convert to lowercase</button>
              <button type="button" className="btn btn-info mx-2 my-2"  onClick={handlecopy}>copy to clipboard</button>
              <button type="button" className="btn btn-info mx-2 my-2"  onClick={cleartext}>clearText</button>
                
       </div>
    
     
      
      <div className='container my-3'style={{colour:props.mode==='light'?'dark':'light'}}>
        <h2>text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h3>preview</h3>       
        <p>{text.length>0?text:"enter something"}</p>


      </div>
   
       </div>
    </>
    )
}
