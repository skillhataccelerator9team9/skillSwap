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

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ContactScreen from './screens/ContactScreen';

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
            <Route path="/ContactUS" element={<ContactScreen />} />
            <Route path="/Login" element={<LoginScreen />} />
          </Routes>
        }
      </Router>
    </div>
  )
}

export default App
