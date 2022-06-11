
import React, {useState} from "react";
import "./App.css";
import TodoPopUp from "./components/TodoPopUp";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "./components/Button";
import Todo from "./components/Todo";
import TodoEditPopUps from "./components/TodoEditPopUps";

function App() {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [todoText, setTodoText] = useState('');
  const [todoTitle, setTodoTitle] = useState('')
  const [todos, setTodos] = useState([]);
  const [todoDueDate, setTodoDueDate] = useState('');
  const [editTodoTitle, setEditTodoTitle] = useState('');
  const [editTodoText, setEditTodoText] = useState('');
 
 
  //State for the TodoEditPopup
  
 

  
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
             <Todo todo={todo}  setEditTodoText={setEditTodoText} editTodoText={editTodoText} editTodoTitle={editTodoTitle} setEditTodoTitle={setEditTodoTitle} todos={todos} setTodos={setTodos} showEdit={showEdit} setShowEdit={setShowEdit}/>
           )
         })}
      </div>
        <TodoPopUp onClose={() => setShow(false)} setShow={setShow} show={show} title="New Todo" todoDueDate={todoDueDate} setTodoDueDate={setTodoDueDate} todoTitle={todoTitle} setTodoTitle={setTodoTitle} todoText={todoText} setTodoText={setTodoText} todos={todos} setTodos={setTodos}/>
        <TodoEditPopUps  setEditTodoText={setEditTodoText} editTodoText={editTodoText} editTodoTitle={editTodoTitle} setEditTodoTitle={setEditTodoTitle} showEdit={showEdit } setShowEdit={setShowEdit}todos={todos} todoTitle={todoTitle} setTodos={setTodos}setTodoTitle={setTodoTitle}/>
       <button onClick={() => setShow(true)} className="todo-button rounded-full h-16 w-16 bg-blue relative"><AiOutlinePlus className="text-3xl absolute left-4 top-4"/></button>
    </div>
  </div>;
}

export default App;

