import ReactDOM from "react-dom/client";
import Home from './components/Home';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
