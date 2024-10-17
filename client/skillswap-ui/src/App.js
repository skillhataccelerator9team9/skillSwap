
import { React, useState } from 'react';
import './App.css'

import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import LandingPage from './screens/LandingPage';
import LoginScreen from './screens/LoginScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import UserSearchScreen from './screens/UserSearchScreen';


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
            <Route path="/loginPage" element={<LoginScreen />} />
            <Route path="/userPage" element={<UserProfileScreen />} />
            <Route path="/userSearchPage" element={<UserSearchScreen />} />
          </Routes>
        }
      </Router>
    </div>
  )
}

export default App
