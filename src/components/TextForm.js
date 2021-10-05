import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick= ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "success");
  }
  const handleLowClick= ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase", "success");
  }
  const handlePuncs=()=>{
    let puncs = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let newText = text.replace(puncs,'');
    setText(newText)
    props.showAlert("Punctuations has been removed", "success");
  }
  const handleCopy=()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  }
  const handleClear= ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Clear", "success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style= {{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} style= {{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8">
        </textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my- 1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my- 1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my- 1" onClick={handlePuncs}>Remove Punctuations</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my- 1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my- 1" onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-3" style= {{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} charecters</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
