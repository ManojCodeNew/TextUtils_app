import React from 'react'
import { useState } from 'react';

export default function Textform(props) {
    const [text,setText]=useState("");
    
    
    const onChangetext=(event)=>{
        setText(event.target.value);
    }
    const UpperCase=()=>{
        if (text==='') {
            alert("Text is empty")
        } else {
            const uppercasetext=text.toUpperCase();
            setText(uppercasetext)
        }
    }
    const LowerCase=()=>{
        if (text==='') {
            alert("Text is empty")
        } else {
            const lowercasetext=text.toLowerCase();
            setText(lowercasetext)
        }

    }
    const ClearText=()=>{
        if (text==='') {
            alert("Text is empty")
        } else {
            const newText='';
            setText(newText)
        }
    }
    const [mode,setMode]=useState('white');
    const [textmode,setTextMode]=useState('black');

    const DarkMode=()=>{
        if (mode==='white' && textmode==='black') {
            setMode('black');
            setTextMode('white');}
        else{
            setMode('white');
            setTextMode('black');
        }
    }
    const FirstCap=()=>{
        const firstletcap=text.charAt(0).toUpperCase()+text.slice(1);
        setText(firstletcap);
    }
    const Copy=()=>{
            navigator.clipboard.writeText(text);
    }

    const whitespace=text.split(' ');
    // this  is very imp join('')
    const finalstring=whitespace.join('');
    return (
            <>
            <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl object-center'>{props.heading}</h1>
                    <textarea placeholder="Enter a text"  value={text} onChange={onChangetext} rows={10} cols={100} className={`bg-${mode} w-50 flex items-center justify-center text-${textmode} rounded-lg border-2 border-blue-600`}></textarea>
                <div className='p-3 flex flex-row items-center justify-center m-1'>
                        <button onClick={UpperCase} className='bg-blue-500 p-2 m-1 rounded-lg'>UpperCase</button>
                        <button onClick={LowerCase} className='bg-blue-500 p-2 m-2 rounded-lg'>LowerCase</button>
                        <button onClick={ClearText} className='bg-blue-500 p-2 m-2 rounded-lg'>Clear</button>
                        <button onClick={DarkMode} className='bg-blue-500 p-2 m-2 rounded-lg'>DarkMode</button>
                        <button onClick={FirstCap} className='bg-blue-500 p-2 m-2 rounded-lg'>First Letter Capital</button>
                        <button onClick={Copy} className='bg-blue-500 p-2 m-2 rounded-lg'>Copy</button>
                </div>
                    <div>
                        <p>Text length :{finalstring.length}</p>
                        <p>Word length :{text.split(" ").length}</p>
                    </div>
            </div>
            </>  
    );
}
