import React, { useState } from "react";
import "./App.css";
import TodoPopUp from "./components/TodoPopUp";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "./components/Button";
import Todo from "./components/Todo";
import TodoEditPopUps from "./components/TodoEditPopUps";
import { motion } from "framer-motion";

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
    <div className="App bg-white p-4 mt-12 ">
      <div className="todo-container min-h-screen max-w-2xl bg-cream mx-auto border border-textDark rounded-3xl p-8">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center text-brown text-start text-4xl font-bold mt-3"
        >
          Tasci✏️
        </motion.h1>

        <div className="buttons-container w-full flex justify-around pt-12 pb-6">
          <Button text="All" />
          <Button text="Today" />
          <Button text="Upcoming" />
        </div>
        <div className="todo-container">
          <motion.h5
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
            className="py-2 text-sm text-textDark"
          >
            You currently have
            <span className="text-orange"> {todos.length} </span>
            {todos.length === 1 ? "task" : "tasks"}
          </motion.h5>
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
            className="todo-button rounded-lg h-10 w-32 mt-4 relative text-sm text-orange font-semibold bg-cream border border-orange hover:drop-shadow"
          >
            Create Task
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
