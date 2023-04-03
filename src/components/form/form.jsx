import React, { useState } from "react";

function Form() {
    // const [name, newName] = useState("");
    // const [text, newText] = useState("");

    // function change(event){
    //     console.log(event.target.value);
    //     newName(event.target.value);
    // }
    // function changeH1(event){
    //     newText(name);
    //     event.preventDefault();
    // }
    





    const [text, newtext] = useState({fname:"",lname:""});

    function change(event){
        const {name, value} = event.target;
        newtext(v => {
            if(name === "fname"){
                return{
                    fname: value,
                    lname: v.lname
                };
            } 
            else if(name === "lname"){
                return{
                    lname: value,
                    fname: v.fname
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
