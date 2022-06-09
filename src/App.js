
import React, {useState} from "react";
import "./App.css";
import TodoPopUp from "./components/TodoPopUp";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "./components/Button";
import Todo from "./components/Todo";

function App() {
  const [show, setShow] = useState(false);
  const [todoText, setTodoText] = useState('');
  const [todoTitle, setTodoTitle] = useState('')
  const [todos, setTodos] = useState([]);
  const [todoDueDate, setTodoDueDate] = useState('');


console.log(todos);

  return <div className="App bg-lightBlue p-4">
    <div className="todo-container min-h-screen max-w-2xl bg-darkBlue mx-auto rounded-3xl p-8">
      <h1 className="text-center text-white text-start text-4xl">Todo's</h1>
      <div className="buttons-container w-full flex justify-around py-12">
        <Button text="TODAY"/>
        <Button text="UPCOMING"/>
        <Button text="COMPLETED"/>
      </div>
      <div className="todo-container">
         {todos.map((todo)=> {
           return (
             <Todo todo={todo}/>
           )
         })}
      </div>
        <TodoPopUp onClose={() => setShow(false)} show={show} title="New Todo" todoDueDate={todoDueDate} setTodoDueDate={setTodoDueDate} todoTitle={todoTitle} setTodoTitle={setTodoTitle} todoText={todoText} setTodoText={setTodoText} todos={todos} setTodos={setTodos}/>
       <button onClick={() => setShow(true)} className="todo-button rounded-full h-16 w-16 bg-blue"><AiOutlinePlus /></button>
    </div>
  </div>;
}

export default App;

