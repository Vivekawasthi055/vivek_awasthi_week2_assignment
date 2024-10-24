import { useNavigate } from "react-router-dom";
import "../styles/ViewEntries.css";
import PropTypes from "prop-types";

// ViewEntries component to display all travel entries
const ViewEntries = ({ entries, deleteEntry, setEntryToEdit }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle delete entry action
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      deleteEntry(id);
    }
  };

  const handleEdit = (entry) => {
    setEntryToEdit(entry); // Set the entry to edit
    navigate("/add"); // Use navigate to redirect
  };

  return (
    <div className="view-entries">
      <h1>Travel Entries</h1>
      {entries.length === 0 ? (
        <p className="no-entry">No entries found.</p>
      ) : (
        <ol>
          {entries.map((entry) => (
            <li key={entry.id}>
              <h3>{entry.title}</h3>
              <p>Location: {entry.location}</p>
              <p>Date: {entry.date}</p>
              <p>Description: {entry.description}</p>
              <button className="edit-btn" onClick={() => handleEdit(entry)}>
                Edit
              </button>
              <button onClick={() => handleDelete(entry.id)}>Delete</button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

ViewEntries.propTypes = {
  entries: PropTypes.array.isRequired,
  deleteEntry: PropTypes.func.isRequired,
  setEntryToEdit: PropTypes.func.isRequired,
};

export default ViewEntries;
