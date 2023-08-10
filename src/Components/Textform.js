import React, {useState} from "react"


export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked"+text)
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLowClick=()=>{
        console.log("lowercase was clicked"+text)
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("on change")
        setText(event.target.value);
    }
    const [text,setText]=useState('enter your text here'); 
    // setText("new text"); 
  return (
  <>  <div className="container">
       
      <div className="mb-3">
  {/* <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/> */}
<h1>{props.heading}  </h1>
<div className="mb-3">
  {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={ text} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="9"></textarea>
</div></div>
<button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button> 
<button className="btn btn-primary mx-1"onClick={handleLowClick} >Convert to Lowercase</button>
</div> 
<div className="container">
<h1>Your text Summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.08*text.split(" ").length} minutes take to read</p>
<h2>Preview</h2>
<p>{text}</p>
 </div></>
  )
}
