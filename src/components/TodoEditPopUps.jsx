import React, {useEffect} from 'react'
import { AiOutlineClose } from "react-icons/ai";
import {motion} from "framer-motion"

const TodoEditPopUps = ({showEdit, setShowEdit, editingText, setEditingText, todo, handleEdit, todoEditing, onClose, editingBody,editingDate,setEditingBody,setEditingDate}) => {
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
  
  if(!showEdit){
    return null
}

  console.log(todo)
  return (
  
<motion.div layout="position" initial={{opacity:0,}} animate={{opacity:1 }} transition={{ type:"spring", duration:1}} exit={{opacity:0}} className="modal-container h-96 w-screen">
  <div className="modal h-96 bg-white rounded-3xl max-w-2xl mx-5 absolute mx-auto left-0 right-0 top-5 mt-20">
    <div className="relative h-full">
       <button className="absolute top-0 right-0 h-12 w-12 text-brown" onClick={onClose}><AiOutlineClose /></button>
      <form className="modal-content p-8 h-full  flex flex-column">
          <div className="modal-header">
              <h4 className="modal-title  text-center text-lg ">
                  
              </h4>
          </div>
          <div className="modal-body text-textLight my-5">
                  <input className="todo-input block m-1 text-brown font-bold text-2xl mb-4 max-w-1xl outline-0 placeholder:text-textLight tracking-wider" type="text" placeholder="Edit task title" value={editingText} onChange={(e) => {setEditingText(e.target.value)}} />
                  <textarea className="todo-input block m-1 bg-lightBlue text-brown mb-12 w-full h-12 outline-0 placeholder:text-textLight " type="text" placeholder="Edit task description..." value={editingBody} onChange={(e) => {setEditingBody(e.target.value)}}></textarea>
                  
          </div>
          <div className="modal-footer absolute bottom-28 right-3 mb-1" >
            <button
             onClick={(e) =>{(e.preventDefault())(handleEdit(todoEditing))} } 
            className="todo-button rounded-lg h-10 w-32 text-sm text-textDark bg-white  border z-10 border-textLight hover:drop-shadow"
          >
            Edit Task
          </button>
          </div>
          <input className="absolute bottom-10 right-40 todo-input block outline-0 p-0 m-0  z-0 text-textLight placeholder:text-textLight" type="date" value={editingDate} onChange={(e) => {setEditingDate(e.target.value)}} />
      </form>
      </div>
      </div>
      </motion.div>











  )
}

export default TodoEditPopUps