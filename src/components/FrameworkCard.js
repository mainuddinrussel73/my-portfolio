import React from 'react';

const FrameworkCard = ({ title, des, imageLnk }) => {
    return (
            <div className="skill">
                <img src={imageLnk} alt=''/>
                <h4 class="skill-title">{title}</h4>
                <p class="skill-description">{des}</p>
            </div>
    );
};

export default FrameworkCard;
