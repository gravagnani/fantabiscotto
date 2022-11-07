import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Participants from "./pages/Participants/Participants";
import Draw from "./pages/Draw/Draw";
import Rules from "./pages/Rules/Rules";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route index path="/" element={<Navigate to="/participants" />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/draw" element={<Draw />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
