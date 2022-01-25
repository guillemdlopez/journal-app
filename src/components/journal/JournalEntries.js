import React from "react";
import { useSelector } from "react-redux";
import JournalEntry from "./JournalEntry";

// estamos trabajando con Redux, no hace falta pasar props al componente porque están todos en el store
const JournalEntries = () => {
  const { notes } = useSelector((state) => state.notes);

  return (
    <div className="journal__entries">
      {notes.map((note) => {
        return <JournalEntry key={note.id} {...note} />;
      })}
    </div>
  );
};

export default JournalEntries;
