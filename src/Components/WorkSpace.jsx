import React from 'react'
import { useState } from 'react'
import AddTodo from './AddTodo'
import Update from './Update'
import Filter from './Filter'


const WorkSpace = () => {
  const data = [
    {
        name: "Office Task-1",
        description : " this is the description of My FirstTask",
        status : "Completed"
    },
    {
        name: "Office Task-2",
        description : " this is the description of My SecondTask",
        status : "Not Completed"

    }
  ]
      const [todo,setTodo] = useState(data)
      const [show,setShow] = useState(true)
      const [editId,setEditId] = useState("")

      // TO DELETE A TODO
      const deleteTodo = (id)=>{
      const deletedTodo = todo.filter((delInfo,idx)=> idx !== id)
      setTodo(deletedTodo)
    }
    // TO EDIT A TODO

    const handleEdit = (id) =>{
        setShow(false)
        setEditId(id)
      }

      

return (
    <>
       {show==true? <AddTodo todo={todo} setTodo={setTodo} /> : <Update todo={todo} setTodo={setTodo} editId={editId} show={show} setShow={setShow}/>  }
       <Filter/>
       
  <div className='container mt-5 cardDetails d-flex '>
     
  {todo.map((value,idx)=>(
      <div key={idx}>
          <div className='row m-2'>
              <div className='card bg-primary-subtle'>
                  <div className='card-body'>
                  <h6>Name: {value.name}</h6>
                  <h6>Description:{value.description}</h6>
                  <div className='status d-flex'>
                  <h6>Status:</h6>
                  <select>
                    {value.status == "Completed" ? <option>Completed</option> : <option>Not Completed</option>}
                    {value.status == "Not Completed" ? <option>Not Completed</option> : <option>Completed</option>}
                  </select> 
                  </div>
                  <div className='buttons d-flex justify-content-around m-5'>
                  <button className="btn btn-success w-auto" onClick={()=>handleEdit(idx)}>Edit</button>
                  <button className="btn btn-danger w-auto" onClick={()=>deleteTodo(idx)}>Delete</button>
                  </div>
                  </div>
              </div>
          </div>
      </div>
  ))}
  
  </div>
  </>
)
}

export default WorkSpace