import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] =useState('Enter Text here');
    // setText('Your Text here');
    const handleUpclick = () => {
        // console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnchange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpclick}>Convert To UpperCase</button>
        </div>
    )
}
