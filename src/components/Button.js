import React, { useContext } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { DataContext } from '../App';
import "./Button.css";

const AddButton = () => {
  const {showToggle,setShowToggle,updateToggle}=useContext(DataContext);

  const handleToggle=()=>{

    if(updateToggle) // If updateToggle is running as true then don't do anything
    {
      return;
    }
    setShowToggle(!showToggle);
  }

  return (
      <div className="addButton" onClick={handleToggle}>
        <IoMdAdd className='addIcon'/>
      </div>
  )
}

export default AddButton;