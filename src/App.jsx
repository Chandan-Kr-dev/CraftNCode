import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Docs from "./components/Docs";
{/*
import Login from "./components/Login";
import SignUp from "./components/SignUp"; 
*/}
import TruthMate from "./components/TruthMate";
import News from "./components/News";
import Main from "./components/Main";
import Gamification from './components/Gamification';
import Games from './components/Games'
import Quizes from './components/Quizes'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
         {/*
        <Route path="/login" element={<Login />} />
       
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        */}
        <Route path="/trueMix" element={<Main />} />
        <Route path="/truthmate" element={<TruthMate />} />
        <Route path="/news" element={<News />} />
        <Route path="/gamification" element={<Gamification />} />
        <Route path='/games' element= {<Games/>} />
        <Route path='/quizes' element= {<Quizes/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
