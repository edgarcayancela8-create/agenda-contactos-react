import useLocalStorage from "./hooks/useLocalStorage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

import contactsData from "./utils/contacts";

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", contactsData);

  const addContact = (contact) => {
    setContacts([
      ...contacts,
      {
        id: Date.now(),
        ...contact,
      },
    ]);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact,
      ),
    );
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home contacts={contacts} />} />
        <Route 
          path="/nuevo" 
          element={<Create addContact={addContact} />} />
        <Route
          path="/editar/:id"
          element={<Edit contacts={contacts} updateContact={updateContact} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
