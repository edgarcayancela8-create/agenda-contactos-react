import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

import contactsData from "./utils/contacts";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");

    return savedContacts ? JSON.parse(savedContacts) : contactsData;
  });

  const addContact = (contact) => {
    setContacts([
      ...contacts,
      {
        id: Date.now(),
        ...contact,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home contacts={contacts} />} />
        <Route path="/nuevo" element={<Create addContact={addContact} />} />
        <Route path="/editar/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
