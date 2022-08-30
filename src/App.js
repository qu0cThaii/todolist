
import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [todoList, settodoList] = useState([{
    }]);
  
  const [value,setvalue]= useState([]);  
  const id = () => Math.floor(Math.random() * 1000);
 
  //lay gia tri trong form
  function handlevalueChange(e){
    setvalue(e.target.value)
  }

  //khi submit khong reload lai trang
  function handleSubmit(e) {
    e.preventDefault(); 
  }
  
  function deleteTodo(id) {
    const newTodo = todoList.filter((todo) => todo.id !== id ) 
    settodoList(newTodo);
  }
  function addTodo(){
    console.log(addTodo)
    settodoList(...todoList,{id,value})

  }

  return (
  <> 
    <form onSubmit={handleSubmit}>
     <input  
      type={"text"} 
      value={value}
      onChange ={handlevalueChange}
      /> 
    <button onClick={()=> addTodo}>SUBMIT</button>
      {/* <button onClick={addTodo}>submit</button> */}
    </form>
   
   <ul>
      {todoList.map((todo) => 
      <><li key={todo.id}>{todo.value} </li><button onClick={() => deleteTodo(todo.id)}>done</button></>
      )}
    </ul>
  </>  
  )
}

export default App;
// ReactDOM.render(<p>Hello</p>,document.getElementById('root'))