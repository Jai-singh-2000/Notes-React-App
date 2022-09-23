import { useContext,useRef } from 'react';
import { DataContext } from '../App';
import { uid } from 'uid';
import "./AddNote.css";

const AddNote = () => {
  const inputRef=useRef(null);
  const {showToggle,setShowToggle,updateToggle,setUpdateToggle,updateInput,setUpdateInput,createCard}=useContext(DataContext);    

  const handleEnter=(e)=>{
  
    if(e.key==="Enter"||e.type==="click")
    {
    
      let note=inputRef.current.value;

      if(note.length===0){
        // If note is empty then return
        setShowToggle(false);
        setUpdateToggle(false)
        return; 
      }
        
      if(showToggle)
      {
        // Create new note object
          let obj={
            id:uid(),
            note:note 
          }
        createCard(obj); // Pass object to createCard which is on App.js
        setShowToggle(!showToggle); // Make input box invisible
      }

      if(updateToggle)
      {
        
        inputRef.current.value=updateInput.note;
        
        // Passing extra argument to diffentiate between normal and updated card creation
        createCard(updateInput,true); 
        setUpdateToggle(!updateToggle);
      }

      inputRef.current.value=""; // Make input Ref value blank
    }
  }

  const handleUpdateValue=()=>{
    let note=inputRef.current.value;
   
    setUpdateInput((prev)=>{
      return {
      ...prev,
      note:note
        }
   })

  }

  if(showToggle)
  {
    return (
      <div className="box-container">
        <div className="box">
            <textarea ref={inputRef} className='inputField' name="" id="" cols="25" rows="6" onKeyDown={(e)=>handleEnter(e)}/>
            <button className='orange' onClick={(e)=>handleEnter(e)}>Add</button>
        </div>   
      </div>
    )
  }

  if(updateToggle)
  {
    return (
      <div className="box-container">
        <div className="box">
            <textarea ref={inputRef} className='inputField' name="" id="" cols="25" rows="6" value={updateInput.note} onChange={()=>handleUpdateValue()} onKeyDown={(e)=>handleEnter(e)}/>
            <button className='gray' onClick={(e)=>handleEnter(e)}>Update</button>
        </div>   
      </div>
    )
  }

  
}

export default AddNote;