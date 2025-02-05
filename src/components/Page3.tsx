import React from 'react';
// import './Page.css'; // Assuming you have a CSS file for styling

const Page3: React.FC = () => {
    return (
        <div className='pageLayout'>
            <div className='header'>
                 <h1>Page 3</h1>
            <p>This is the content for the third page of the application.</p>
            </div>
            <div className="box-container">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
    );
};

export default Page3;