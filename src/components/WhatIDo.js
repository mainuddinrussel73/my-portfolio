import React from 'react';
import FrameworkCard from './FrameworkCard';

import vanila from '../images/icons/js.png'
import nodejs from '../images/icons/nodejs.png'
import reactjs from '../images/icons/react.png'
import mongo from '../images/icons/mongo.png'



const WhatIDo = () => {
    const skillItems = [
        { title: "Vanilla JavaScript", 
            des: "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.", 
            imgLnk: vanila 
        },
        { title: "React", 
            des: "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
            imgLnk: reactjs
        },
        { title: "Node JS", 
            des: "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
        imgLnk: nodejs },
        { title: "MongoDB", 
            des: "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
         imgLnk: mongo
        }
    ];

    return (
        <section className=" skills tertiary-bg">
            <h2 className="section-title text-center">What I Do</h2>
            <p className="section-description text-center mb-20 ">I have more than 10 years experience building software for
                clients all over
                the world. Below is a quick overview of my
                main technical skill sets and technologies i use. Want to find out more about my experience? Check out
                my online resume
                and project portfolio.</p>
            <div className="skills-container">
                {skillItems.map(skill => (
                    <FrameworkCard key={skill} title={skill.title} des={skill.des} imageLnk={skill.imgLnk} />
                ))}
            </div>
        </section>
    );
};

export default WhatIDo;
