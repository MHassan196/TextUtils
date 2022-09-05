import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] =useState('');
    // setText('Your Text here');
    const handleUpclick = () => {
        // console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoclick = () => {
        // console.log("UpperCase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnchange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    return (
        <>
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert To UpperCase</button>
            <button className="btn btn-primary" onClick={handleLoclick}>Convert To LowerCase</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}