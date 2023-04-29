import React ,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");
    const handleUpClick = ()=>{
        console.log("Click is handled");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!","success");

    }
    const handleClipClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!","success");

    }

    const handleExtraSpaces = ()=>{
       let extra = /[ ]+/g;
       let newText = text.replace(extra," ");
       setText(newText);
       props.showAlert("Removed Extra Spaces!","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <>
        <div className='container'>
        <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
             <h3>{props.heading}</h3>
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#c3b4b4':'white',color:props.mode==='dark'?'white':'black'}}  value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}> Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}> Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}> Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClipClick}> Copy to Clipboard</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p> {text.split(' ').filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{ 0.008 * text.split(' ').filter((element)=>{ return text.length !== 0}).length} Minutes to read</p>
        <h2>Text preview</h2>
        <p>{text.length>0?text:"No text to preview"}</p>
    </div>
    </>
    )
}