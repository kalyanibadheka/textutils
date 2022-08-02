import React,{useState} from 'react'


export default function TextForm(props) {
    const handleupclick = ()=> {
        // console.log("Uppercase clicked: "+text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleloclick = ()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleclearclick = ()=>{
        let newText='';
        setText(newText)
    }
    const handlecopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleonchange = (event)=> {
        // console.log("Onchange clicked");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container my-2 ' style={{color : props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
            <h2>{props.heading}</h2>
            {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
            <textarea className="form-control" onChange={handleonchange} style={{backgroundColor : props.mode==='dark'?'rgb(0 5 54)':'white', color : props.mode==='dark'?'white':'black' }} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={handleupclick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleloclick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleclearclick}>Clear Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handlecopy}>Copy Text</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        </div>
        <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>            
            <p>{text.split(" ").filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((Element)=>{return Element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
  )
}
