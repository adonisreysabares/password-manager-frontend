import React from 'react';
import logo from '../../assets/react.svg'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Logo and App Name Section */}
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="app-name">SecurePass</h1>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-image">
          <img 
            src={logo} 
            alt="Profile" 
            className="profile-picture"
          /> 
        </div>
        <span className="account-name">John Doe</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/dashboard/add">Add Password</Link></li>
          <li><Link to="/dashboard/settings">Settings</Link></li>
          <li><Link to="/dashboard/profile">Profile</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;