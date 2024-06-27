import React, { useState } from 'react'

const AddTodo = ({todo,setTodo}) => {
  const [newtodo,setNewTodo] = useState("")
  const [description,setDescription] = useState("")

  const addNewTodo = () =>{
    const newTododetails = {
      name: newtodo,
      description : description,
    }
    setTodo([...todo,newTododetails])
  }
  return (
    
    <div className='topbar '>
        <h1 class="text-center text-success m-5">My Todo</h1>
        <div class="input-group flex-nowrap d-flex justify-content-around">
        <input type="text" className="TopIn rounded border-success-subtle " placeholder="Todo Name" value={newtodo} onChange={(e)=> setNewTodo(e.target.value)}/>
        <input type="text" className="TopIn rounded border-success-subtle " placeholder="Todo Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <button type="button" className="addtodo btn btn-success rounded" onClick={addNewTodo}>Add Todo</button>
        </div>

    </div>
  )
}

export default AddTodo