import React, { useEffect, useState } from 'react';
import AddEditPassword from './AddEditPassword';

const PasswordList = () => {
  const token = localStorage.getItem('token');
  const [accounts, setAccounts] = useState([]);
  const [editingAccount, setEditingAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [masterPassword, setMasterPassword] = useState(''); // State for masterPassword
  const [isMasterPasswordEntered, setIsMasterPasswordEntered] = useState(false); // Track if master password is entered
  const [isMasterPasswordVisible, setIsMasterPasswordVisible] = useState(true); // Track visibility of master password input
  const [isPasswordVisible, setIsPasswordVisible] = useState({}); // Track visibility of passwords

  // Fetch accounts when the component mounts
  useEffect(() => {
    if (isMasterPasswordEntered) {
      fetchAccounts(); // Fetch accounts only if the master password has been entered
    }
  }, [isMasterPasswordEntered]);

  const fetchAccounts = async () => {
    setLoading(true);

    if (!masterPassword) {
      alert('Please enter your master password');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/account/accounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ masterPassword }), // Pass the master password in the request body
      });

      if (!response.ok) throw new Error('Failed to fetch accounts');
      
      const data = await response.json();
      setAccounts(data.accountData);
    } catch (error) {
      console.error('Error fetching accounts:', error);
      alert('Failed to load accounts');
      window.location.href="/dashboard"
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (account) => {
    setEditingAccount(account);
  };

  const handleDelete = async (accountId) => {
    try {
      const response = await fetch(`http://localhost:3000/account/accounts/${accountId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete account');
      fetchAccounts(); 
      alert('Account deleted successfully');
    } catch (error) {
      console.error('Error deleting account:', error);
      alert('Failed to delete account');
    }
  };

  const handleSave = () => {
    setEditingAccount(null);
    fetchAccounts(); 
  };

  const handleMasterPasswordSubmit = () => {
    if (!masterPassword) {
      alert('Please enter a master password');
    } else {
      setIsMasterPasswordEntered(true); 
      setIsMasterPasswordVisible(false); 
    }
  };

  const copyToClipboard = (username, password) => {
    const textToCopy = `Username: ${username}\nPassword: ${password}`;
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert('Credentials copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <div className="password-list">
      <h2>Your Passwords</h2>

      
      {isMasterPasswordVisible && ( 
        <div className="floating-master-password">
          <label>Master Password:</label>
          <input
            type="password"
            value={masterPassword}
            onChange={(e) => setMasterPassword(e.target.value)}
            required
          />
          <button onClick={handleMasterPasswordSubmit}>Submit Master Password</button>
        </div>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {accounts.map((account) => (
            <li key={account.id} className="password-card">
              <div className="password-card__header"> 
                <h3 className="password-card__title">{account.account_type}</h3> 
              </div>
              <div className="password-card__content"> 
                <p><b>Website:</b> {account.website}</p>
                <p><b>Username: </b>{account.username}</p>
                <p>
                  <b>Password: </b>
                  {isPasswordVisible[account.id] ? account.password : '••••••••'}
                  <button className="btn-visible"
                    onClick={() => setIsPasswordVisible(prev => ({ ...prev, [account.id]: !prev[account.id] }))}>
                    <i className={`fas ${isPasswordVisible[account.id] ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </p>
                <div className="password-card__actions">

                  <button 
                    onClick={() => handleEdit(account)} 
                    className="edit" 
                  >
                    <i className="fas fa-edit"></i> 
                  </button>
                  <button 
                    onClick={() => handleDelete(account.account_id)} 
                    className="delete" 
                  >
                    <i className="fas fa-trash"></i> 
                  </button>
                  <button 
                    onClick={() => copyToClipboard(account.username, account.password)} 
                    className="copy" 
                  >
                    <i className="fas fa-copy"></i> 
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        {!editingAccount && !loading && (
          <button onClick={() => setEditingAccount({})}>Add New Password</button>
        )}
      </div>

      {editingAccount && (
        <AddEditPassword
          className="btn-design"
          onSave={handleSave}
          existingData={editingAccount}
        />
      )}
    </div>
  );
};

export default PasswordList;
