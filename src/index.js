import React from "react";
import { BrowserRouter, Routes} from 'react-router-dom'
import {Route} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';


import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SingleBlog from "./components/SingleBlog";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/Login" element={<LoginPage/>}></Route>
          <Route path="/Register" element={<RegisterPage />}></Route>
          <Route path="/singleblog/:id" element={<SingleBlog />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

  