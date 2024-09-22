import React from 'react';
import profileImage from '../images/hardy.png'; // Replace with your profile image path

const Header = () => {
    return (
        <header className="header secondary-bg">
        <nav>
            <h3 className="nav-title">Ma<span class="text-primary">r</span>y</h3>

            <ul>
                <li>Portfolio</li>
                <li>Blog</li>
                <li> <a href=""> <button className="btn-primary">Hire Me</button></a></li>
            </ul>
        </nav>
        <div className="banner">
            <div className="banner-content">
                <h4 className="banner-greetings">Hi, I am</h4>
                <h1 className="banner-title">Mary Hardy</h1>
                <p className="banner-description"> Shot what able cold new see hold.Friendly as an betrayed formerly he.
                    Morning
                    because as to society behaved moments.</p>
                <div className='btn-horizontal'>
                <button className="btn-primary">Download CV</button>
                <button className="btn-primary"> <i className="bi bi-telephone-fill"></i> Contact</button>
                </div>
             
            </div>

            <img className="banner-profile-pic" src={profileImage} alt="Profile"/>
        </div>

    </header>
    );
};

export default Header;
