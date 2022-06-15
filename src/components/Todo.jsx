import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";



const Todo = ({todo, handleDelete, handleComplete, showEditPopUp}) => {

  return (
 
  <div className="todo-container bg-grey text-white w-full rounded-2xl p-4 my-4 relative">
    <h3>{todo.text}</h3>
    <p className='text-xs'>{todo.body}</p>
    <p>{todo.date}</p>
    <div className="buttons flex absolute right-3 bottom-3">
        <AiOutlineClose className='mx-1' onClick={() => {handleDelete(todo.id)}}/>
        <AiFillEdit className='mx-4' onClick={() => {showEditPopUp(todo.id)}}/>
        <input type="checkbox" onChange={() => {handleComplete(todo.id)}}/>
    </div>
</div>

  )
}

export default Todo