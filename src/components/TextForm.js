import React,{useState} from 'react'

function TexthtmlForm(props) {
    const [text,setText]=useState("Enter text here");
   const  handleUpClick=()=>{
        console.log("handleUpClick clicked");
        setText(text.toUpperCase());
    }

     const  handleDownClick=()=>{
        console.log("handleDownClick clicked");
        setText(text.toLowerCase());
    }
    const handleOnChange=(event)=>{
        console.log("handleOnChange clicked");
        setText(event.target.value);
    }


    const hadnldeClearText=()=>{
        console.log("handleClearText clicked");
        setText("");
    }


    const handleCopy=()=>{
        console.log("handleCopy clicked");
        const text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
        console.log("handleExtraSpaces clicked");
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    console.log(`text.split("").filter((element)=> element!==" ").length`,text.split("").filter((element)=> element!==" ").length)

    return (
        <div>
            <div className={`container ${props.mode}=="dark"?white:black`} >
    <h2>{props.heading}</h2>
    <div className="mb-3">
  {/* <label htmlFor="examplehtmlFormControlTextarea1" classNameName="htmlForm-label">Example textarea</label> */}
  <textarea className="htmlForm-control" id="myBox" rows="8"  cols="90"  value={text}  style={{backgroundColor:props.mode=="dark"?"grey":"white",color:props.mode=="dark"?"white":"black"}} onChange={handleOnChange}></textarea>
</div>
    <button className='btn btn-primary ' onClick={handleUpClick}>Convert to UpperCase</button>
    <button className='btn btn-primary mx-1' onClick={handleDownClick}>Convert to LoweCase</button>
    <button className='btn btn-primary mx-1' onClick={hadnldeClearText}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

  </div>
  <div className='container my-3'> 
    <h2>Your Text Summary</h2>
    <p>words {text.trim().split(/[ ]+/).filter((element)=>element!==' ').length} and charachter {text.split("").filter((element)=> element!==" ").length}</p>
    <p>{0.008*text.split('').length} time to read time</p>
  </div>
  <div className='container my-3'>
    <h2>preview</h2>
    <p>{text}</p>

  </div>
        </div>

  )
}

export default TexthtmlForm

