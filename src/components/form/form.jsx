import React, { useState } from "react";

function Form() {
    const [name, newName] = useState("");
    const [text, newText] = useState("");

    function change(event){
        console.log(event.target.value);
        newName(event.target.value);
    }
    function changeH1(event){
        newText(name);
        event.preventDefault();
    }
    
  return (
    <div className="container2">
        <form onSubmit={changeH1}>
            <h1>Hi {text} </h1>
            <input type="text" placeholder="What's your name?" value={name} onChange={change}/>
            <button>Submit</button>
        </form>
    </div>
  );
}

export default Form;
