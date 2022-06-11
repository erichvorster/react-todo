import React, {useEffect} from "react";
import "../styles/modal.css"
import "../styles/modal.css"


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
        props.onClose()
    }
    

  return (
  <div className="modal h-5/6 w-8/12 bg-lightBlue rounded-3xl p-8 mx-auto absolute mx-auto left-0 right-0 top-5">
      <div className="modal-content ">
          <div className="modal-header">
              <h4 className="modal-title text-darkBlue text-center text-lg">
                  {props.title}
              </h4>
          </div>
          <div className="modal-body text-darkBlue my-5">
                  <input className="block m-1 bg-lightBlue text-2xl mb-8 max-w-1xl outline-0" type="text" placeholder="Title" value={props.todoTitle} onChange={(e) => props.setTodoTitle(e.target.value)}/>
                  <textarea className="block m-1 bg-lightBlue mb-12 w-96 h-40 outline-0" type="text" placeholder="Enter your todo here..."  value={props.todoText} onChange={(e) => props.setTodoText(e.target.value)}></textarea>
                  <label htmlFor="">Set a deadline</label>
                  <input className="block m-1 bg-lightBlue text-orange outline-0" type="date" value={props.todoDueDate} onChange={(e) => props.setTodoDueDate(e.target.value)}/>
          </div>
          <div className="modal-footer">
              <button className="button rounded-full h-16 w-16 bg-blue" onClick={addTodo}  >Add</button>
          </div>
      </div>
      </div>
  )
};

export default TodoPopUp;
