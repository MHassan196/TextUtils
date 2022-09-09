import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
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
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraspaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success")
    }
    const handlecapitalize = () => {
        let words = text.toLowerCase().split(" ");
        let newsentence = true;

        for (let i = 0; i < words.length; i++) {

            if (newsentence === true || words[i] === "i") {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
                newsentence = false;
            }

            if (words[i][words[i].length - 1] === "." || words[i][words[i].length - 1] === "?" || words[i][words[i].length - 1] === "!") {
                newsentence = true;
            }

        }

        setText(words.join(" "));
        props.showAlert("Sentence Form Is Activated", "success");
    }
    const handleTitleform = () => {
        let result = [];
        let a = text.toLowerCase().split(" ");

    for (let i = 0; i < a.length; i++) { 
        a[i] = a[i][0].toUpperCase() + a[i].substr(1);
        result.push(a[i]);

    }
    setText(result.join(' '));
    props.showAlert("Title Form Is Applied", "success");
    }

    const handleswapform = () => {
        let chars = text.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
        chars[i] = chars[i].toUpperCase();
    }
    setText(chars.join(""));
    props.showAlert("Swaped The sentence", "success");
    }

    const handleOnchange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? '#2b597e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>Convert To UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>Convert To LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearoclick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopyoclick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraspaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handlecapitalize}>Sentence Form</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleTitleform}>Title Form</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleswapform}>Swap Form</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
            </div>
        </>
    )
}
