import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/AddEntry.css";
import { useNavigate } from "react-router-dom";

// Component for adding or editing a travel entry
const AddEntry = ({ addEntry, editEntry, entryToEdit }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  // Populate fields if an entry is being edited
  useEffect(() => {
    if (entryToEdit) {
      setTitle(entryToEdit.title);
      setLocation(entryToEdit.location);
      setDate(entryToEdit.date);
      setDescription(entryToEdit.description);
    }
  }, [entryToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: entryToEdit ? entryToEdit.id : Date.now(),
      title,
      location,
      date,
      description,
    };

    if (entryToEdit) {
      editEntry(newEntry);
      navigate("/view");
    } else {
      addEntry(newEntry);
    }

    // Clear fields after adding or editing
    setTitle("");
    setLocation("");
    setDate("");
    setDescription("");
  };

  return (
    <div className="add-entry">
      <div className="heading-div">
        <h2>{entryToEdit ? "Edit Travel Entry" : "Add Travel Entry"}</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Enter Your Title"
        />
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          placeholder="Enter Location"
        />
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label>Description:</label>
        <textarea
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Add Descrition"
        />
        <div className="btn">
          <button type="submit">
            {entryToEdit ? "Update Entry" : "Add Entry"}
          </button>
        </div>
      </form>
    </div>
  );
};

AddEntry.propTypes = {
  addEntry: PropTypes.func.isRequired,
  editEntry: PropTypes.func.isRequired,
  entryToEdit: PropTypes.object,
};

export default AddEntry;
