import React, {useState} from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineCalendar} from "react-icons/ai"
import { motion, LayoutGroup } from 'framer-motion';
import "./Todo.css"



const Todo = ({todo, handleDelete, handleComplete, showEditPopUp}) => {

const [isOpen, setIsOpen] = useState(false)

  return (
    <>
 
  <motion.div initial={{opacity:0, scale:0.95}}  animate={{opacity:1 }} exit={{opacity:0}} layout transition={{layout:{duration:0.5, type:'spring'}}} onClick={() => setIsOpen(!isOpen)} className="todo-container bg-gray text-brown rounded-lg p-4 my-5 relative cursor-pointer hover:drop-shadow">
    <motion.h3  layout="position"  className='font-semibold'>{todo.text}</motion.h3>
     {isOpen && (
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} exit={{opacity:0}}>
           <p className='text-xs pt-2 tracking-wide'>{todo.body}</p>
           <motion.p className='text-orange text-xs pt-2'>{todo.date ? <AiOutlineCalendar className='inline mb-1 mr-1 text-base'/> : ""}{todo.date}</motion.p>
      </motion.div>
    
     )}
  
    <motion.div className="buttons flex absolute w-20 justify-around right-3 bottom-3 items-center">
      <motion.div >
      <AiOutlineClose layout="position" onClick={() => {handleDelete(todo.id)}}/>
      </motion.div>
      <motion.div >
      <AiFillEdit  layout="position" onClick={() => {showEditPopUp(todo.id)}}/>
      </motion.div>
      <motion.div >
      <input  layout="position" className='checkbox h-4 w-4 mt-2 text-brown' type="checkbox" onChange={() => {handleComplete(todo.id)}}/>
      </motion.div>
    </motion.div>
</motion.div>
</>
  )
}

export default Todo