import ReactDOM from "react-dom/client";
import Home from './components/Home';
import Favoritos from "./components/Favoritos";

import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import Creaciones from "./components/Creaciones";
import Info from "./components/Info";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favs" element={<Favoritos />} />
          <Route path="creaciones" element={<Creaciones />} />
          <Route path="info" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
