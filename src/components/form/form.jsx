import React, { useState } from "react";

function Form() {
    
    const [text, newtext] = useState({fname:"",lname:""});

    function change(event){
        const {name, value} = event.target;

        newtext(prevValue => {
            if(name === "fname"){
                return{
                    fname: value,
                    lname: prevValue.lname
                };
            } 
            else if(name === "lname"){
                return{
                    lname: value,
                    fname: prevValue.fname
                };
            }
        });
    }

  return (
    <div className="container2">
        <h1>Hi {text.fname} {text.lname} </h1>
        <form>
            <input value={text.fname} name="fname" onChange={change}/>
            <input value={text.lname} name="lname" onChange={change}/>
            <button>Submit</button>
        </form>
    </div>
  );
}

export default Form;
