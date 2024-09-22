import React from 'react';
import facebook from '../images/icons/facebook.png'; // Replace with your profile image path
import twitter from '../images/icons/twitter.png'; // Replace with your profile image path
import ista from '../images/icons/insta.png'; // Replace with your profile image path



const Footer = () => {
    return (
        <footer className="footer secondary-bg">
            <div className="footer-column">
                <h3 className="section-title">Lets Connect</h3>
                <p className="section-description">Please fill out the form on this section to contact with me or call between
                    9:00 A.M and 8.00 P.M ET,
                    Monday through
                    Friday.</p>
                <div className='icons-row'>
                    <a href=""><img src={facebook} alt=""/></a>
                    <a href=""><img src={twitter} alt=""/></a>
                    <a href=""><img src={ista} alt=""/></a>
                </div>
            </div>
            <div classname="footer-column">
                <h3 classname="section-title">Let's Message Me</h3>
                <form action="">
                    <input type="text" placeholder="Your name" />
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={20}
                    placeholder="Message"
                    defaultValue={""}
                    />
                    <input classname="btn-primary btn-submit" type="submit" defaultValue="Submit" />
                </form>
            </div>

    </footer>
    );
};

export default Footer;
