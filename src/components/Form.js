import React, { useState } from "react";
import { useEntryContext } from "../context/TableContext";

const Form = () => {

  const {addEntry} = useEntryContext();
  const [formData, setFormData] = useState({
    name: "",
    email:"",
    phone:"",
    message: ""
  }
  );

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(formData);
  } 

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange}/>
        <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange}/>
        <input type="text" placeholder="Phone" name="phone" value={formData.phone} onChange={handleInputChange}/>
        <input type="text" placeholder="Message" name="message" value={formData.message} onChange={handleInputChange}/>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default Form;
