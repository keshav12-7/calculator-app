import React, { useState } from "react";
import ReactDOM from "react-dom/client"

function Calculator(){
    let [input,setinput]=useState("");
    let [output,setoutput]=useState(0);
    function calculate(){
        try{
            let val = eval(input)
            console.log(val);
        
            setoutput(val)

        }
        catch{
            setoutput("error")
        }
        
    }
    function delete_c(){
        setinput(input.slice(0,-1));
        


    }
    return(
        <div id="container">
            <h1>React Calculator</h1>
            <div id="input">{input || "0"}</div>
            <div id="output">{output}</div>
            <div id="keys">
                <button onClick={()=>{
                    
                    setinput(input+"7")
                }}>7</button>
                <button onClick={()=>{
                    
                    setinput(input+"8");
                }}>8</button>
                <button onClick={()=>{
                    
                    setinput(input+"9");
                }}>9</button>
                <button onClick={()=>{
                    
                    setinput(input+"/");
                }}>/</button>
                <button onClick={()=>{
                   
                    setinput(input+"4");
                }}>4</button>
                <button onClick={()=>{
                    
                    setinput(input+"5");
                }}>5</button>
                <button onClick={()=>{
                   
                    setinput(input+"6");
                }}>6</button>
                <button onClick={()=>{
                   
                    setinput(input+"*");
                }}>X</button>
                <button onClick={()=>{
                    
                    setinput(input+"1");
                }}>1</button>
                <button onClick={()=>{
                    
                    setinput(input+"2");
                }}>2</button>
                <button onClick={()=>{
                    
                    setinput(input+"3");
                }}>3</button>
                <button onClick={()=>{
                   
                    setinput(input+"-");
                }}>-</button>
                <button onClick={()=>{
                   
                    setinput(input+"0");
                }}>0</button>
                <button onClick={()=>{
                   
                    setinput(input+"+");
                }}>+</button>
               <button id="clear" onClick={()=>{
                setinput("")
                setoutput(0)

               }}>C</button>
                <button id="enter" onClick={calculate}>=</button>
                <button id="delete" onClick={delete_c}>delete</button>
            </div>
            
        </div>
    )
}

const reactroot = ReactDOM.createRoot(document.getElementById('root')).render(<Calculator/>);
