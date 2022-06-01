import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Form3 from "./pages/Form3";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import ModalMaster from "./pages/ModalMaster";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
        <Route path="/master" element={<ModalMaster />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
