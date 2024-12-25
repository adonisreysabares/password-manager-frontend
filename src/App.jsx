import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './context/PrivateRoute';
import SignUp from './components/Auth/SignUp';  // AuthProvider should be outside of Router
import Login from './components/Auth/Login';
import PasswordList from './components/Dashboard/PasswordList';
import AddEditPassword from './components/Dashboard/AddEditPassword';
import ProfileSettings from './components/Dashboard/Settings';
import Profile from './components/Dashboard/ProfileSettings'
import Sidebar from './components/Dashboard/Sidebar';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Security from './components/Security';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './styles/PasswordCard.css'
import './styles/global.css';
import './styles/Dashboard.css';
function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path="/dashboard/*"element={
              <PrivateRoute>
                <>
                  <Sidebar />
                  <Routes>
                    <Route index element={<PasswordList />} />
                    <Route path="add" element={<AddEditPassword />} />
                    <Route path="settings" element={<ProfileSettings/>}/>
                    <Route path="profile" element={<Profile/>}/>
                  </Routes>
                </>
              </PrivateRoute>
            } />
            <Route path="/" element={
              <>
                <Navigation />
                <Hero />
                <Features />
                <Testimonials />
                <Security />
                <CTA />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
