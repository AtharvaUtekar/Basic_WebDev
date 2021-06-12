import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
    // import Calendar from 'react-calendar';
    // import 'react-calendar/dist/Calendar.css';
    import 'react-modern-calendar-datepicker/lib/DatePicker.css';
    import Calender from "./Calender";
    import Clock from "./Clock";
    



function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
          <div>
          <Calender className="Page-Calendar"/>
          <Clock />
          </div>
          
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      
      <Footer />
    </div>
  );

}

export default App;
