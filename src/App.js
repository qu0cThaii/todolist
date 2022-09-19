
import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const id = () => Math.floor(Math.random()*100);
  const [todoList, settodoList] = useState([
    
]);
 
  const [newitem,setnewitem]= useState();

   function handlesubmit (e) {
    e.preventDefault(); 
    const newvalue = [...todoList,{id,title:newitem}]
    settodoList(newvalue)
   }
  
  function handlechange(e) {
    return setnewitem(e.target.value);
  }

    //reset sau khi nhap form
    
    function deletetodo(id){
    const newtodo = todoList.filter(todo => todo.id !== id)
    settodoList(newtodo)
  }
  return (
  <>
    <form onSubmit={handlesubmit}>
      <label>Hom nay ban can lam gi?
      <br></br>
      <input type={"text"} value={newitem} onChange={handlechange}></input>
      <input type={"submit"}></input>
      </label>
    </form>
    
    <>
      <ul>
      {todoList.map(todo=> 
      <><li key={todo.id}>{todo.title}</li><button onClick={() => deletetodo(todo.id)}>hoan thanh</button></>
      )}
      
      </ul>
    
    </>   
</>
  )
}

export default App;
// ReactDOM.render(<p>Hello</p>,document.getElementById('root'))