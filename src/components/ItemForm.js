import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [newItem, setNewItem] = useState("")
  const [newCategory, setNewCategory] = useState("Produce")

  
  function handleNewItem(e) {
    setNewItem(e.target.value)
  }

  function handleNewCategory(e) {
    setNewCategory(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newListItem = {
      id: uuid(),
      name: newItem,
      category: newCategory
    }
    console.log(newListItem)
    onItemFormSubmit(newListItem)
  }
  


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name"
          value={newItem}
          onChange={handleNewItem} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
