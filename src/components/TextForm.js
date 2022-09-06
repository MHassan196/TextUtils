import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] =useState('');
    // setText('Your Text here');
    const handleUpclick = () => {
        // console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoclick = () => {
        // console.log("UpperCase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleClearoclick = () => {
        // console.log("UpperCase was clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleCopyoclick = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraspaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success")
    }

    const handleOnchange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'? 'white':'#042743'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearoclick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyoclick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the textbox to preview it here"}</p>
        </div>
        </>
    )
}
