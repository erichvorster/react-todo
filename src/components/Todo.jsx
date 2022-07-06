import React, {useState} from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineCalendar, AiOutlineCheck} from "react-icons/ai"
import { motion, LayoutGroup } from 'framer-motion';
import "./Todo.css"



const Todo = ({todo, handleDelete, handleComplete, showEditPopUp}) => {

const [isOpen, setIsOpen] = useState(false)

  return (
    <>
 
  <motion.div layout="position" initial={{opacity:0, scale:0.95}}  animate={{opacity:1 }} exit={{opacity:0}} layout transition={{layout:{duration:0.5, type:'spring'}}} onClick={() => setIsOpen(!isOpen)} className="todo-container bg-gray text-brown rounded-lg p-4 my-5 relative cursor-pointer hover:drop-shadow">
    <motion.h3 layout="position"  className='font-semibold'>{todo.text}</motion.h3>
     {isOpen && (
      <motion.div layout="position" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} exit={{opacity:0}}>
           <p className='text-xs pt-2 tracking-wide'>{todo.body}</p>
           <motion.p layout="position" className='text-orange text-xs pt-2'>{todo.date ? <AiOutlineCalendar className='inline mb-1 mr-1 text-base'/> : ""}{todo.date}</motion.p>
      </motion.div>
    
     )}
  
    <motion.div className="buttons flex absolute w-20 justify-around right-3 bottom-3 items-center">
      <motion.div layout="position" >
      <AiOutlineClose onClick={() => {handleDelete(todo.id)}}/>
      </motion.div>
      <motion.div layout="position" >
      <AiOutlineCheck onClick={() => {handleComplete(todo.id)}}/>
      </motion.div>
      <motion.div layout="position" >
      <AiFillEdit onClick={() => {showEditPopUp(todo.id)}}/>
      </motion.div>
    </motion.div>
</motion.div>
</>
  )
}

export default Todo