import React, { useState } from 'react';

const AddEditPassword = ({ onSave, existingData }) => {
  const token = localStorage.getItem('token')
  const [title, setTitle] = useState(existingData ? existingData.account_type : '');
  const [website, setWebsite] = useState(existingData ? existingData.website : '');
  const [username, setUsername] = useState(existingData ? existingData.username : '');
  const [password, setPassword] = useState(existingData ? existingData.password : '');
  const [masterPassword, setMasterPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      accountType: title,
      password,
      masterPassword,
      website,
      username,
    };

    try {
      // Create or update password entry using fetch
      if (existingData) {
        // Update logic
        const response = await fetch(`http://localhost:3000/account/${existingData.account_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error('Failed to update account');
      } else {
        // Create logic
        const response = await fetch('http://localhost:3000/account/creation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error('Failed to create account');
      }

      // Trigger the parent onSave callback to refresh the list
      //onSave();
      alert('Password saved successfully!');
      window.location.href = "/add"
    } catch (error) {
      console.error('Error saving password:', error);
      alert('Failed to save password!');
    }
  };

  const generateStrongPassword = () => {
    const length = 12; // Length of the password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    setPassword(password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="add-edit-password">
      <h2>{existingData ? 'Edit Password' : 'Add New Password'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Account Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div className="password-input-container">
          <div className="password-container" style={{ position: 'relative' }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ paddingRight: '40px' }}
            />
            <button className="btn-visible" type="button" onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '40%', transform: 'translateY(-50%)' }}>
              <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
          </div>

          <button type="btn-generator" onClick={generateStrongPassword}>Generate</button>
        </div>
        <input
          type="password"
          placeholder="Master Password"
          value={masterPassword}
          onChange={(e) => setMasterPassword(e.target.value)}
          required
        />
        <button type="submit">{existingData ? 'Update' : 'Save'}</button>
      </form>
    </div>
  );
};

export default AddEditPassword;
