// import React from "react";
// import "./App.css";
// import Introduction from "./components/Introduction";

// function App () {
//   return (
//     <div className="App">
//       <Introduction />
//     </div>
//   );
// }

// export default App;

import React from 'react'
import './App.css'

import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ContactScreen from './Screens/ContactScreen';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        {
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/Home" element={<HomeScreen />} />
            <Route path="/Login" element={<LoginScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
          </Routes>
        }
      </Router>
    </div>
  )
}

export default App
