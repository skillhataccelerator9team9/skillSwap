
import { React, useState } from 'react';
import './App.css'

import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import LandingPage from './screens/LandingPage';
import LoginScreen from './screens/LoginScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import UserSearchScreen from './screens/UserSearchScreen';
import OnBoardingScreen from './screens/OnBoardingScreen';
import EmailVerification from './components/EmailVerification';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import DashboardScreen from './screens/DashboardScreen';
import { UserProvider } from './components/UserContext';



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {

  return (
    <div className="app">
      <UserProvider>
        <Router>
          {
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/loginPage" element={<LoginScreen />} />
              <Route path="/userPage" element={<UserProfileScreen />} />
              <Route path="/userSearchPage" element={<UserSearchScreen />} />
              <Route path="/verify-email" element={<EmailVerification />} />
              <Route path="/onBoardingPage" element={<OnBoardingScreen />} />
              <Route path="/forgotPasswordPage" element={<ForgotPasswordScreen />} />
              <Route path="/resetPasswordPage" element={<ResetPasswordScreen />} />
              <Route path="/dashboard" element={<DashboardScreen />} />
            </Routes>
          }
        </Router>
      </UserProvider>
    </div>
  )
}

export default App
