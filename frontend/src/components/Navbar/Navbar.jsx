import React from 'react';
import "./Navbar.css";
import Button from '@mui/material/Button';

function Navbar() {
    return (
        <div className='main-container'>
            <h1 className='nav-title'>NAVIGATE NEXUS</h1>
            <div className='nav-components'>
                <Button variant="contained" className="nav-comp-button"><i class="fa-solid fa-compass "></i>  DashBoard</Button>
                <Button variant="contained" className="nav-comp-button"><i class="fa-regular fa-paper-plane"></i>My Journeys</Button>
                <Button variant="contained" className="nav-comp-button"><i class="fa-regular fa-message"></i>Messages</Button>
                <Button variant="contained" className="nav-comp-button"><i class="fa-solid fa-book"></i>Travel Diary</Button>
                <Button variant="contained" className="nav-comp-button"><i class="fa-solid fa-bell"></i>Notifications</Button>
                <div className='nav-space'>
                </div>
                <Button variant="contained" className="nav-comp-button"><i class="fa-solid fa-right-from-bracket"></i>LogOut</Button>
            </div>



        </div>
    );
}

export default Navbar;
