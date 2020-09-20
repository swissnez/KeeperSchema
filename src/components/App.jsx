//jshint esversion:6
import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNotes] = useState([]);

  function addOn(itemNote){
    setNotes(prevNotes =>{
      return [...prevNotes,itemNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes=>{
      return prevNotes.filter((note,index)=>{
        return index !== id;
      })
    })
  }
  
  window.notes = notes
  return (
    <div>
      <Header />
      <CreateArea addOn={addOn}/>
      {notes.map((note,index) => (
        <Note 
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          delete={deleteNote}
         />
         ))}
      <Footer />
    </div>
  );
}

export default App;
