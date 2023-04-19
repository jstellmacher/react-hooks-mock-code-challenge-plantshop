import React, { useState } from "react";

function NewPlantForm() {
  const [formData, setFormData]=useState({name:"",image:"",price:""})
  const {name, image, price} = formData;
  const handleChange = (e) => {
    const name = e.target.name; 
    const value = e.target.value;
    setFormData({...formData,[name]:value});
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("submitted")

    fetch('http://localhost:6001/plants')
    method: "POST"
    headers: {"Content-Type" : "application/json"}
    body: JSON.stringify(formData)
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input value={name} onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input value={image} onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input value={} onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button value={} onChange={handleChange} type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
