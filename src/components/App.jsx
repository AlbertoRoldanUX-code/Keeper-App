

import React from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";


function App() {
  return (
    <div>
    <Header />
    {notes.map(function(note){
      return (<Note 
        key={note.key}
        title={note.title}
        content={note.content}
      />)
      

    })}
    <Footer />
    </div>
    
  );
}

export default App;

