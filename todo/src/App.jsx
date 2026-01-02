import { useState } from "react";

function App() {
  var textState = useState("");
  var noteText = textState[0];
  var setNoteText = textState[1];

  var imageState = useState(null);
  var image = imageState[0];
  var setImage = imageState[1];

  var notesState = useState([]);
  var notes = notesState[0];
  var setNotes = notesState[1];

  function handleTextChange(event) {
    setNoteText(event.target.value);
  }

  function handleImageChange(event) {
    var file = event.target.files[0];
    if (file) {
      var imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (noteText === "" && image === null) {
      return;
    }

    var newNote = {
      text: noteText,
      image: image,
    };

    setNotes(notes.concat(newNote));
    setNoteText("");
    setImage(null);
  }

  return (
    <div>
      <h1>Simple Notebook</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your note..."
          value={noteText}
          onChange={handleTextChange}
        ></textarea>

        <br />
        <br />

        <input type="file" accept="image/*" onChange={handleImageChange} />

        <br />
        <br />

        <button type="submit">Add Note</button>
      </form>

      <hr />

      <h2>Notes</h2>

      {notes.map(function (note, index) {
        return (
          <div key={index} style={{ marginBottom: "20px" }}>
            <p>{note.text}</p>
            {note.image && <img src={note.image} width="200" />}
          </div>
        );
      })}
    </div>
  );
}

export default App;
