import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import './App.css';
import myFlashcards from './myFlashcards';

function App() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    // Instead of fetching from an API, load the flashcards from your local file.
    setFlashcards(myFlashcards);
  }, []);

  return (
    <div className="container">
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default App;
