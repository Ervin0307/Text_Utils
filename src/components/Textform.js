import React, {useState} from "react";

export default function Textform(props) {
  
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  }

  const handleLoClick = ()=>{ 
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }
  
  const handleOnChange = (e) => {
    setText(e.target.value);
  }
  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Handled", "success");
  }

  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared", "success");
}
  
  const [text, setText] = useState("");
  return (
    <>
    <div className="container my-4" style={{color:props.mode==='light'? 'black':'white'}}>
      <h1>{props.head}</h1>
        <div className="form-group">
          <h1>{props.heading}</h1>
          <textarea style={{backgroundColor:props.mode==='dark'? 'rgb(36, 74, 104)' : 'white', color:props.mode==='light'? 'black':'white'}}
            className="form-control"
            id="myBox"
          rows="3"
          onChange={handleOnChange}
          value={text}

          ></textarea>
      </div>
        <button disabled={text.length===0} className={`btn btn-${props.btncol}`} onClick={handleUpClick}>Convert to Uppercase</button>
        
        <button disabled={text.length===0} className={`btn btn-${props.btncol} mx-1 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
        
        <button disabled={text.length===0} className={`btn btn-${props.btncol} mx-1 my-1`} onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className={`btn btn-${props.btncol}  mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className={`btn btn-${props.btncol} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      
      <div className="container" style={{color:props.mode==='light'? 'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>The text has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length } words and {text.length } characters</p>
        <p>This is a {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minute read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview..."}</p>
      </div>
    </>
  );
}
