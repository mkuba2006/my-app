import React, { useState } from "react";


function List() {

    const [item, newitem]= useState("");
    const [items, newitems]= useState([]);

    function change(e){
        const val= e.target.value;
        newitem(val);
    }

    function addItem(){
        newitems(e=>{
            return[...e, item]
        })
        newitem("");
    }

  return (
    <div className="conta">
      <div className="head">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={change} value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map(i => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;



