import {useState} from "react"
import Form from "./Form";
import {nanoid} from "nanoid"
import Items from "./Items";
import {ToastContainer,toast } from "react-toastify"

// get local items
const getLocalStorage = () => {
  let list = localStorage.getItem(`list`);
  if(list)
  {
    list =  JSON.parse(localStorage.getItem(`list`))
  }
  else{
    list = []
  }
  return list
}

// set local storage function
const setLocalStorage = (items)=>{
  localStorage.setItem(`list`, JSON.stringify(items))

}
// alternative for getting local storage data
const defaultData = JSON.parse(localStorage.getItem(`list`) ||  `[]`)

const App = () => {
  const [items, setItems] = useState(defaultData)

  const addItem = (itemName) =>{
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid()
    }
    const newItems = [...items,newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success(`item added to the list`)
  }

const removeItem = (itemId) =>{
const newItems = items.filter((item)=> item.id !== itemId )
setItems(newItems)
setLocalStorage(newItems)
toast.success(`item deleted`)
}

const editItem = (itemId)=>{
  const newItems =  items.map((item)=>{
  if(item.id === itemId){
const newItem  = {...item,completed:!item.completed }
return newItem
  }
  return item
  })
  setItems(newItems)
  setLocalStorage(newItems)
}

  return <section className="section-center">
    <ToastContainer  position='top-center' />
    <Form addItem={addItem} />
    <Items items={items} editItem={editItem}  removeItem={removeItem} />
    </section>;
};

export default App;
