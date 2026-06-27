import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

import contactsData from "./utils/contacts";

function App() {
  const [contacts] = useState(contactsData);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home contacts={contacts} />} />
        <Route path="/nuevo" element={<Create />} />
        <Route path="/editar/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;