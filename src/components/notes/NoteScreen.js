import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleting } from "../../actions/notes";
import useForm from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  const dispatch = useDispatch();
  // active:note --> renombramos la propiedad active
  const { active: note } = useSelector((state) => state.notes);

  // cuando cambia la nota activa, tenemos que reiniciar el useForm() para que resetee el state
  const [formValues, handleInputChange, reset] = useForm({ ...note });
  console.log(formValues);

  // si el id de la nota es diferente, entonces podemos ejecutar el useEffect
  // variable mutable que no va a redibujar todo el componente si cambia
  // comparamos la nota activa con la del selector
  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const { title, body, id } = formValues;

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          placeholder="what happened today"
          className="notes__text-area"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt="landscape" />
          </div>
        )}
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default NoteScreen;
