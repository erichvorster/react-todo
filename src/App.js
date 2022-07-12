import React, { useEffect, useState } from "react";
import "./App.css";
import TodoPopUp from "./components/TodoPopUp";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "./components/Button";
import Todo from "./components/Todo";
import TodoEditPopUps from "./components/TodoEditPopUps";
import { motion } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import moment from "moment";

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
  const [timeline, setTimeline] = useState("All");
  const [filteredTodos, SetFilteredTodos] = useState([]);

  //Toast messages

  const editTodoPop = () =>
    toast.info("👍 Task has been edited", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const deleteTodoPop = () => {
    toast.warn("Task deleted", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const completeTodoPop = () => {
    toast.success("💪 Task completed", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    let data;

    const todayDateFormated = moment().format("YYYY-MM-DD");

    console.log(todayDateFormated);

    if (timeline === "Today") {
      data = todos.filter((todo) => todo.date === todayDateFormated);
    } else if (timeline === "Next 7 days") {
      data = todos.filter((todo) => {
        const todoDate = moment(todo.date, "YYYY-MM-DD");
        const todayDate = moment(todayDateFormated, "YYYY-MM-DD");

        const diffDays = todoDate.diff(todayDate, "days");

        return diffDays >= 0 && diffDays < 7;
      });
    } else if (timeline === "All") {
      data = todos;
    } else {
      data = todos.filter((todo) => todo.projectName === timeline);
    }
    SetFilteredTodos(data);
  }, [todos, timeline]);

  //Delete todo
  function deleteTodo(id) {
    console.log("click");
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    deleteTodoPop();
  }

  //Complete todo
  function completeTodo(id) {
    console.log("click");
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    completeTodoPop();
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
        todo.date = editingDate;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
    setEditingText("");
    setEditingDate("");
    setEditingBody("");
    setShowEdit(false);

    editTodoPop();
  }

  useEffect(() => {
    console.log(timeline);
  }, [timeline]);

  function handleAll() {
    setTimeline("All");
  }
  function handleToday() {
    setTimeline("Today");
  }
  function handleUpcoming() {
    setTimeline("Next 7 days");
  }

  //State for the TodoEditPopup

  return (
    <div className="App bg-textLight p-4 pt-12 pb-12">
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
          <button
            className="bg-lightBlue text-textDark text-sm w-44 h-10 border border-textLight rounded-lg py-2 px-6 hover:shadow"
            onClick={() => handleAll()}
          >
            All
          </button>
          <button
            className="bg-lightBlue text-textDark text-sm w-44 h-10 border border-textLight rounded-lg py-2 px-6 hover:shadow"
            onClick={() => handleToday()}
          >
            Today
          </button>
          <button
            className="bg-lightBlue text-textDark text-sm w-44 h-10 border border-textLight rounded-lg py-2 px-6 hover:shadow"
            onClick={() => handleUpcoming()}
          >
            <span className="hidden md:inline-block">Next</span> 7 days
          </button>
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

          {filteredTodos.map((todo) => {
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
          setEditingDate={setEditingDate}
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
      <ToastContainer />
    </div>
  );
}

export default App;
