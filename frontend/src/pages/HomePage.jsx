import React from 'react';
import TravelRegister from '../components/TravelRegister.jsx';
// import TravelUpdate from '../components/TravelUpdate';
import Navbar from '../components/Navbar/Navbar.jsx';
import DateCalendarViews from '../components/HomePageComponents/Calender/Calender.jsx'
import "./HomePage.css";
import MyJourneys from '../components/HomePageComponents/MyJourneys/MyJourneys.jsx';

function HomePage() {
    return (
        <div className='container'>
            <Navbar />
            <div className='content'>
                <h1>Find Your Perfect Travel Match and Make Every Journey Memorable</h1>
                <h2>Welcome and explore the world!</h2>
                <MyJourneys />
                <DateCalendarViews />
                <TravelRegister />
            </div>
            {/* <TravelUpdate  /> */}
        </div>
    );
}

export default HomePage;
