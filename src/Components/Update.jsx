import { useEffect, useState } from "react"
const Update = ({todo,setTodo,editId,show,setShow}) => {

        const [newtodo,setNewTodo] = useState("")
        const [description,setDescription] = useState("")
        

    useEffect(()=>{
         const selectedTodo = todo.filter((val, idx)=> idx == editId)
          setNewTodo(selectedTodo[0].name)
          setDescription(selectedTodo[0].description)
        },[editId])

        const UpdateTaskDetails = () =>{
          const editedTask = {
            name : newtodo,
            description :description
          }
          todo[editId] = editedTask;
          setTodo([...todo])
          setShow(!show)
        }

  return (
    <div className='topbar '>
    <h1 class="text-center text-success m-5">My Todo</h1>
    <div class="input-group flex-nowrap d-flex justify-content-around">
    <input type="text" className="TopIn rounded border-success-subtle " placeholder="Todo Name" value={newtodo} onChange={(e) =>setNewTodo(e.target.value)}/>
    <input type="text" className="TopIn rounded border-success-subtle " placeholder="Todo Description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
    <button type="button" className="addtodo btn btn-success rounded" onClick={UpdateTaskDetails}>Update</button>
    </div>

</div>
  )
}

export default Update