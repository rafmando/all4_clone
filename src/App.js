import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Shows from './components/shows/Shows'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import My4 from './pages/my4/My4'
import LiveTv from './pages/live_tv/LiveTv'
import BoxSets from './pages/box_sets/BoxSets'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Shows/>}/>
        <Route path="/live_tv" element={<LiveTv/>}/>
        <Route path="/box_sets" element={<BoxSets/>}/>
        <Route path="/my4" element={<My4/>}/>
      </Routes>
    </Router>
  );
}

export default App;
