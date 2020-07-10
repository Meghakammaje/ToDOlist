import React from "react";

function Todoitem(props){
  return (
    <div className="todo-item">
    <input type="checkbox"/>
    <p > {props.todosdata.text}</p>
    </div>  )
}


export default Todoitem;
