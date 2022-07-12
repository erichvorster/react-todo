import React, {useEffect} from "react";
import "../styles/modal.css"
import "../styles/modal.css"
import { AiOutlineClose } from "react-icons/ai";
import "./TodoPopUp.css"
import {motion, LayoutGroup} from 'framer-motion'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoPopUp = ({show, title, onClose, todo, setTodo, setTodos, todos, setShow, todoBody, setTodoBody, todoDate, setTodoDate, }) => {

    const notify = () => toast.info('✏️Task has been added', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
       
    const closeOnEscapeKeyDown = (e) => {
        if((e.charCode || e.keyCode) === 27){
            onClose()
        }
    }

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown)
        return function cleanup(){
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [])


    if(!show){
        return null
    } 

    function handleSubmit(e){
        if(!todo){
            return
        }
        e.preventDefault()

        const newTodo= {
            id: Math.random() * 10000,
            text:todo,
            body:todoBody,
            date:todoDate,
            completed:false
        }
        setTodos([...todos].concat(newTodo))
        setTodo("")
        setTodoBody("")
        setTodoDate("")
        setShow(false)
        notify()
    }

    

  return (
    <LayoutGroup>
<motion.div layout="position" initial={{opacity:0,}} animate={{opacity:1 }} transition={{ type:"spring", duration:1}} exit={{opacity:0}} className="modal-container h-96 ">
  <motion.div className="modal h-96 bg-white rounded-xl border border-textLight mx-8 absolute mx-auto left-0 right-0 top-5 mt-20">
    <div className="relative h-full">
       <button className="absolute top-3 font-bold right-0 text-xl h-12 w-12 text-brown" onClick={onClose}><AiOutlineClose /></button>
      <form onSubmit={handleSubmit} className="modal-content p-8 h-full  flex flex-column">
          <div className="modal-header">
              <h4 className="modal-title  text-center text-lg ">
                  {title}
              </h4>
          </div>
          <div className="modal-body text-textLight my-5">
                  <input className="todo-input block m-1 text-brown font-bold text-2xl mb-4 w-full outline-0 placeholder:text-textLight tracking-wider" type="text" placeholder="Untitled" value={todo} onChange={(e) => {setTodo(e.target.value)}} />
                  <textarea className="todo-input block m-1 bg-lightBlue text-brown mb-6 w-full h-28 outline-0 placeholder:text-textLight " type="text" placeholder="Enter your todo here..." value={todoBody} onChange={(e) => {setTodoBody(e.target.value)}}></textarea>
                  <input className="date-input todo-input  block outline-0 p-0 m-0 pr-2  z-0 " type="date" value={todoDate} onChange={(e) => {setTodoDate(e.target.value)}} />
          </div>
          <div className="modal-footer absolute bottom-28 right-3 mb-1" >
            <button
            onClick={handleSubmit}
            className="todo-button rounded-lg h-10 w-24 md-w-38 text-sm text-orange bg-white  border z-10 border-orange hover:drop-shadow"
          >
            Create Task
          </button>
          </div>
          
      </form>
      <ToastContainer/>
      </div>
      </motion.div>
      </motion.div>
      </LayoutGroup>
  )
       
};

export default TodoPopUp;