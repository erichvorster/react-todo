import React,{useState} from 'react'

const TodoEditPopUps = (props) => {
   
    
  

    if(props.showEdit === false){
        return null
    }


    const addUpdatedTodo = (id) => {
        // if(!props.todoTitle || !props.todoText){
        //     return
        // }
    
        
        props.setTodos([...props.todos, {text:props.editTodoText, title:props.editTodoTitle,date:props.todoDueDate, id: Math.random() * 100 }])
        props.setShowEdit(false)
    }

    console.log(props.editTodoText)
  


  return (
    <div className="modal h-5/6 w-8/12 bg-blue rounded-3xl p-8 mx-auto absolute mx-auto left-0 right-0 top-5">
   <div className="modal-content ">
          <div className="modal-header">
              <h4 className="modal-title text-darkBlue text-center text-lg">
                  {props.title}
              </h4>
          </div>
          <div className="modal-body text-darkBlue my-5">
                  <input className="block m-1 bg-blue text-2xl mb-8 max-w-1xl outline-0" type="text" value={props.editTodoTitle} onChange={(e) => {props.setEditTodoTitle(e.target.value)}}/>
                  <textarea className="block m-1 bg-blue mb-12 w-96 h-40 outline-0" type="text" placeholder="Enter your todo here..." value={props.editTodoText} onChange={(e) => {props.setEditTodoText(e.target.value)}}></textarea>
                  <label htmlFor="" className="text-lightGrey">Set a deadline</label>
                  <input className="block m-1 bg-blue text-lightGrey outline-0" type="date"/>
          </div>
          <div className="modal-footer">
              <button className="button rounded-full h-16 w-16 bg-blue hover:" onClick={addUpdatedTodo}>Add</button>
          </div>
      </div>
    </div>
  )
}

export default TodoEditPopUps