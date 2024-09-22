import React from 'react';

const Resume = () => {
    return (
        <section className="resume tertiary-bg">
        <h3 style={{ marginBottom: '20px'  }} className="section-title text-center">A summary of My Resume</h3>
        <div className="resume-container">
            <div className="resume-column">
                <h3 className='resume-column-h3' >My Education</h3>
                <div style={{ marginBottom: '10px' , marginTop: '10px'  }}>
                    <h4 className='resume-column-h4'>Master in Computer Engineering</h4>
                    <h5 className="experience-sub-title">Harvard University / 2015 - 2017</h5>
                    <p>List skill/technologies here. You can change the icon above
                        to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                    </p>
                </div>
                <hr
                   style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .5,
                    borderColor : '#000000'
                }}
                />
                <h3 style={{  marginTop: '10px' }} className='resume-column-h3'>My Education</h3>
                <div style={{ marginBottom: '10px', marginTop: '10px'  }}>
                    <h4 className='resume-column-h4'>Master in Computer Engineering</h4>
                    <h5 className="experience-sub-title">Harvard University / 2015 - 2017</h5>
                    <p>List skill/technologies here. You can change the icon above
                        to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                    </p>
                </div>
                <hr />
            </div>
            <div className="resume-column">
                <h3 className='resume-column-h3'>My Experience</h3>
                <div style={{ marginBottom: '10px' , marginTop: '10px' }}>
                    <h4 className='resume-column-h4'>Sr. Frontend Developer</h4>
                    <h5 className="experience-sub-title">Apple Inc / 2020 - Current</h5>
                    <p>List skill/technologies here. You can change the icon above
                        to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                    </p>
                </div>
                <hr
                style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .5,
                    borderColor : '#000000'
                }}
                   
                />
                <h3 style={{  marginTop: '10px' }} className='resume-column-h3'>My Experience</h3>
                <div style={{ marginBottom: '10px' , marginTop: '10px' }}>
                    <h4 className='resume-column-h4'>Sr. Frontend Developer</h4>
                    <h5 className="experience-sub-title">Apple Inc / 2020 - Current</h5>
                    <p>List skill/technologies here. You can change the icon above
                        to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                    </p>
                </div>
                <hr />
            </div>
        </div>
        <div className="text-center resume-download-button">
            <button className="btn-primary"><i className="bi bi-download"></i> Download CV</button>
        </div>
    </section>
    );
};

export default Resume;
