import React, { useState } from "react";
import Schema from "./Schema";

function CreateArea(props) {
  
const [note,setNote] =  useState(Schema());

function handleChange(event){
  const {name,value} = event.target;
  
  setNote(prevValue=>{
    return {
      ...prevValue,[name]:value
    }
  });
}

function handleClick(event){
  props.addOn(note); 
  event.preventDefault(); // !!!Remember event.preventDefault() stops refresh of the page during submit button press 
  setNote(Schema());
}

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title}  />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content} />
        <button onClick={handleClick}>Add</button>
      </form> 
    </div> 
  ); 
}

export default CreateArea;
