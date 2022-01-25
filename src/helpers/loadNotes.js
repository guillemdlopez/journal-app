import { db } from "../firebase/firebase-config";

export const loadNotes = async (uid) => {
  const notesSpnap = await db.collection(`${uid}/journal/notes`).get();
  const notes = [];
  notesSpnap.forEach((snapHijo) => {
    notes.push({ id: snapHijo.id, ...snapHijo.data() });
  });
  return notes;
};
