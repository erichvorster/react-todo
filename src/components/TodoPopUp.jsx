import React, {useEffect} from "react";
import "../styles/modal.css"
import Todo from "./Todo";

const TodoPopUp = (props) => {
    const closeOnEscapeKeyDown = (e) => {
        if((e.charCode || e.keyCode) === 27){
            props.onClose()
        }
    }

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown)
        return function cleanup(){
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [])


    if(!props.show){
        return null
    }

   
    const addTodo = (e) => {
        if(!props.todoTitle || !props.todoText){
            return
        }
        e.preventDefault();
        props.setTodos([...props.todos, {text:props.todoText, title:props.todoTitle,date:props.todoDueDate, id: Math.random() * 100 }])
        props.setTodoText('')
        props.setTodoTitle('')
    }
    

  return (
  <div onClick={props.onClose} className="modal h-screen w-4/5 bg-lightBlue rounded-3xl p-12 mx-auto">
      <div onClick={e => e.stopPropagation()} className="modal-content">
          <div className="modal-header">
              <h4 className="modal-title text-darkBlue">
                  {props.title}
              </h4>
          </div>
          <div className="modal-body text-darkBlue ">
                  <input class="block m-1" type="text" placeholder="Title" value={props.todoText} onChange={(e) => props.setTodoText(e.target.value)}/>
                  <input class="block m-1" type="text" placeholder="Todo"  value={props.todoTitle} onChange={(e) => props.setTodoTitle(e.target.value)}/>
                  <input type="date" value={props.todoDueDate} onChange={(e) => props.setTodoDueDate(e.target.value)}/>
          </div>
          <div className="modal-footer">
              <button className="button" onClick={props.onClose} onClick={addTodo} >Add</button>
          </div>
      </div>
      </div>
  )
};

export default TodoPopUp;
