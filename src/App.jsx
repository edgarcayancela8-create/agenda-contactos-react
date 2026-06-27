import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import Header from "./components/layout/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo" element={<Create />} />
        <Route path="/editar/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
