import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";



const Todo = (props) => {

  return (
    <div className="todo-container bg-grey text-white w-full rounded-2xl p-4 my-4 relative">
        <h3>{props.todo.title}</h3>
        <p className='text-xs'>{props.todo.text}</p>
        <p>{props.todo.date}</p>
        <div className="buttons flex absolute right-3 bottom-3">
            <AiOutlineClose className='mx-1'/>
            <AiFillEdit className='mx-1'/>
        </div>
    </div>
  )
}

export default Todo