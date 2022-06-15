import React, {useEffect} from "react";
import "../styles/modal.css"
import "../styles/modal.css"
import { AiOutlineClose } from "react-icons/ai";
import "./TodoPopUp.css"


const TodoPopUp = ({show, title, onClose, todo, setTodo, setTodos, todos, setShow, todoBody, setTodoBody, todoDate, setTodoDate}) => {
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
    }

  return (
<div className="modal-container h-screen w-screen">
  <div className="modal h-screen bg-lightBlue rounded-3xl max-w-2xl mx-5 absolute mx-auto left-0 right-0 top-5">
    <div className="relative">
       <button className="absolute top-0 right-0 h-12 w-12 text-blue" onClick={onClose}><AiOutlineClose /></button>
      <form onSubmit={handleSubmit} className="modal-content p-8">
          <div className="modal-header">
              <h4 className="modal-title text-darkBlue text-center text-lg">
                  {title}
              </h4>
          </div>
          <div className="modal-body text-darkBlue my-5">
                  <input className="block m-1 bg-lightBlue text-2xl mb-8 max-w-1xl outline-0" type="text" placeholder="Title" value={todo} onChange={(e) => {setTodo(e.target.value)}} />
                  <textarea className="block m-1 bg-lightBlue mb-12 w-96 h-40 outline-0" type="text" placeholder="Enter your todo here..." value={todoBody} onChange={(e) => {setTodoBody(e.target.value)}}></textarea>
                  <label htmlFor="">Set a deadline</label>
                  <input className="block m-1 bg-lightBlue text-orange outline-0" type="date" value={todoDate} onChange={(e) => {setTodoDate(e.target.value)}} />
          </div>
          <div className="modal-footer">
              <button onClick={handleSubmit}className="button rounded-full h-16 w-16 bg-blue">Add</button>
          </div>
      </form>
      </div>
      </div>
      </div>
  )
};

export default TodoPopUp;