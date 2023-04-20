import React, { useState } from 'react'
import {toast } from "react-toastify"
const Form = ({addItem}) => {
    const [newItemName, setNewItemName] = useState(``)
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!newItemName){
      toast.error(`please provide value`)
        return;
    }
    console.log(newItemName);
    addItem(newItemName)
    setNewItemName(``)

  }
  
    return (
    <form onSubmit={handleSubmit} >
        <h4>Things to do</h4>
        <div className="form-control">
            <input type="text" className="input" value={newItemName} onChange={(event)=>setNewItemName(event.target.value)} />
        <button type="submit" className="btn" >
            Add item
        </button>
        </div>
        </form>
  )
}

export default Form