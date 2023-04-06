import React, { useState } from "react";
import Li from "./ToDoItem";

function List() {

    const [item, newitem]= useState("");
    const [items, newitems]= useState([]);

    function change(ev){
        const val= ev.target.value;
        newitem(val);
    }

    function addItem(){
        newitems(e=>{
            return[...e, item]
        })
        newitem("");
    }

    function deleteItem(id) {
      newitems(previt=>{
        return previt.filter((item, index)=>{
          return index !== id;
        });
      })
    }


    
  return (
    <div className="conta">
      <div className="head">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={change} value={item} />
        <button onClick={addItem}><span>Add</span></button>
      </div>
      <div>
        <ul>
          {items.map((Item, index) => (
              <Li id={index} text={Item} onChecked={deleteItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;



