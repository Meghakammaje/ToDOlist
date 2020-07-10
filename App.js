
import React from "react";
import Product from "./Product";
import todosData from "./todosdata"
import Todoitem from "./Todoitem"
import ReactDOM from "react-dom";
function App(){
  const todoItems= todosData.map(item=> <Todoitem key={item.id} i={item} />)
  return (
    <div className="todo-list">
    {todoItems}
  </div>)
}


export default App;
