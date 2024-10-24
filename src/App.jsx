import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddEntry from "./pages/AddEntry";
import ViewEntries from "./pages/ViewEntries";
import AppLayout from "./layout/AppLayout";

// Main component that handles routing and state management for travel entries
const App = () => {
  const [entries, setEntries] = useState(() => {
    const storedEntries = localStorage.getItem("travelEntries");
    return storedEntries ? JSON.parse(storedEntries) : [];
  });

  const [entryToEdit, setEntryToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("travelEntries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => setEntries([...entries, entry]);

  const editEntry = (updatedEntry) => {
    setEntries(
      entries.map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry
      )
    );
    setEntryToEdit(null); // Reset after editing
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/add",
          element: (
            <AddEntry
              addEntry={addEntry}
              editEntry={editEntry}
              entryToEdit={entryToEdit}
            />
          ),
        },
        {
          path: "/view",
          element: (
            <ViewEntries
              entries={entries}
              editEntry={editEntry}
              deleteEntry={deleteEntry}
              setEntryToEdit={setEntryToEdit}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
