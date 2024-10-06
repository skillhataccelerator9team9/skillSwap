
import React from 'react'
import './App.css'

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ContactScreen from './screens/ContactScreen';
import LandingPage from './screens/LandingPage';

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
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/" element={<HomeScreen />} />
            <Route path="/Home" element={<HomeScreen />} />
            <Route path="/ContactUS" element={<ContactScreen />} />
            <Route path="/Login" element={<LoginScreen />} /> */}
          </Routes>
        }
      </Router>
    </div>
  )
}

export default App
