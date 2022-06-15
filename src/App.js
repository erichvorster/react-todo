import React, { useState } from "react";
import "./App.css";
import TodoPopUp from "./components/TodoPopUp";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "./components/Button";
import Todo from "./components/Todo";
import TodoEditPopUps from "./components/TodoEditPopUps";

function App() {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoBody, setTodoBody] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [editingBody, setEditingBody] = useState("");
  const [editingDate, setEditingDate] = useState("");
  const [todoDate, setTodoDate] = useState("");

  //Delete todo
  function deleteTodo(id) {
    console.log("click");
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  //Complete todo
  function completeTodo(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  //Show edit todo pop up

  function showEditPopUp(id) {
    setShowEdit(true);
    setTodoEditing(id);
  }

  //Edit todo

  function editTodo(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
        todo.body = editingBody;
        // todo.date = editingDate;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
    setEditingText("");
    setEditingDate("");
    setEditingBody("");
    setShowEdit(false);
  }

  console.log(editingBody);

  //State for the TodoEditPopup

  return (
    <div className="App bg-lightBlue p-4 ">
      <div className="todo-container min-h-screen max-w-2xl bg-darkBlue mx-auto rounded-3xl p-8">
        <h1 className="text-center text-white text-start text-4xl">Todo's</h1>
        <div className="buttons-container w-full flex justify-around py-12">
          <Button text="Today" />
          <Button text="Next 7 days" />
          <Button text="Completed" />
        </div>
        <div className="todo-container">
          {todos.map((todo) => {
            return (
              <Todo
                todo={todo}
                handleDelete={deleteTodo}
                handleComplete={completeTodo}
                showEditPopUp={showEditPopUp}
                editingText={editingText}
                setEditingText={setEditingText}
              />
            );
          })}
        </div>
        <TodoPopUp
          onClose={() => setShow(false)}
          setShow={setShow}
          show={show}
          setTodo={setTodo}
          todo={todo}
          setTodos={setTodos}
          todos={todos}
          todoBody={todoBody}
          setTodoBody={setTodoBody}
          todoDate={todoDate}
          setTodoDate={setTodoDate}
        />
        <TodoEditPopUps
          onClose={() => setShowEdit(false)}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
          handleEdit={editTodo}
          editingText={editingText}
          setEditingText={setEditingText}
          todo={todo}
          todoEditing={todoEditing}
          editingBody={editingBody}
          editingDate={editingDate}
          setEditingBody={setEditingBody}
          setEditingDate={setEditingBody}
        />

        {show ? (
          ""
        ) : (
          <button
            onClick={() => setShow(true)}
            className="todo-button rounded-full h-16 w-16 bg-blue relative"
          >
            <AiOutlinePlus className="text-3xl absolute left-4 top-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
