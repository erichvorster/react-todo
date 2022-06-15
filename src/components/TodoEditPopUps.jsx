import React, {useEffect} from 'react'

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
    <div className='modal-background'>
    <div className="modal h-5/6 w-8/12 bg-blue rounded-3xl p-8 mx-auto absolute mx-auto left-0 right-0 top-5">
   <form className="modal-content ">
          <div className="modal-header">
              <h4 className="modal-title text-darkBlue text-center text-lg">
                  title
              </h4>
          </div>
          <div className="modal-body text-darkBlue my-5">
                  <input className="block m-1 bg-blue text-2xl mb-8 max-w-1xl outline-0" type="text" value={editingText} onChange={(e) => {setEditingText(e.target.value)}}/>
                  <textarea className="block m-1 bg-blue mb-12 w-96 h-40 outline-0" type="text" placeholder="Enter your todo here..." value={editingBody} onChange={(e) => {setEditingBody(e.target.value)}}></textarea>
                  <label htmlFor="" className="text-lightGrey">Set a deadline</label>
                  <input className="block m-1 bg-blue text-lightGrey outline-0" type="date" value={editingDate} onChange={(e) => {setEditingDate(e.target.value)}}/>
          </div>
          <div className="modal-footer">
              <button className="button rounded-full h-16 w-16 bg-blue hover" onClick={(e) =>{e.preventDefault();handleEdit(todoEditing)} }  >Add</button>
          </div>
          <div></div>
      </form>
    </div>
  </div>
  )
}

export default TodoEditPopUps