import React from 'react'
import '../../styles/Settings.css'; // Importing the CSS file

export default function Settings(){
    return(
        <>
        <h1>This is the Settings</h1>
        <div className="settings-container">
            <label>
                <input type="checkbox" /> Enable Notifications
            </label>
            <label>
                <input type="checkbox" /> Dark Mode
            </label>
            <button className="save-button">Save Changes</button>
        </div>
        </>
    )
}