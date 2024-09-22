import React from 'react';

const AboutMe = () => {
    const aboutItems = [
        { title: "Name: ", description: "Mary Hardy" },
        { title: "Email: ", description: "info@gmail.com" },
        { title: "Date of birth: ", description: "11 November 1987" },
        { title: "From: ", description: "Los Angeles, USA" }
    ];

    return (
        <section className="about  secondary-bg">
        <h2 className="section-title">About Me</h2>
        <p className="section-description">I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me. Delivering work within time and budget which meets clients requirements in our mata.</p>
        <div className="about-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {aboutItems.map((item, index) => (
                <div className="item" key={index}>
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-description">{item.description}</p>
                </div>
            ))}
        </div>
    </section>
    );
};

export default AboutMe;
