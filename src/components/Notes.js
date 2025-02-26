import React, { useState, useEffect } from "react";

const Notes = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  // Load saved notes from Chrome storage
  useEffect(() => {
    window.chrome.storage.local.get(["notes"], (result) => {
      if (result.notes) {
        setNotes(result.notes);
      }
    });
  }, []);

  // Save note to Chrome storage
  const addNote = () => {
    if (note.trim() === "") return;

    const newNotes = [...notes, note];
    setNotes(newNotes);
    window.chrome.storage.local.set({ notes: newNotes });
    setNote(""); // Clear input
  };

  // Delete a note
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    window.chrome.storage.local.set({ notes: updatedNotes });
  };

  return (
    <div className="p-4 w-72">
      <h2 className="text-lg font-bold">Quick Notes</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full p-2 border rounded mt-2"
        placeholder="Write your note here..."
      />
      <button
        onClick={addNote}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded w-full"
      >
        Add Note
      </button>
      <ul className="mt-4">
        {notes.map((n, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded mt-2">
            {n}
            <button onClick={() => deleteNote(index)} className="text-red-500 ml-2">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
