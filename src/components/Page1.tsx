import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Page.css'; // Assuming you have a CSS file for styling

const Page1: React.FC = () => {
    const navigate = useNavigate();
    const [isPurple, setIsPurple] = useState(false);
    const [rotatedBoxes, setRotatedBoxes] = useState<boolean[]>(Array(8).fill(false));

    const toggleTextColor = () => {
        setIsPurple(!isPurple);
    };

    const handleBoxClick = (index: number) => {
        const newRotatedBoxes = [...rotatedBoxes];
        newRotatedBoxes[index] = !newRotatedBoxes[index];
        setRotatedBoxes(newRotatedBoxes);
    };

    return (
        <div className='pageLayout'>
            <div className='header'>
                <h1>Welcome To My Practice Layout</h1>
                <p style={{ color: isPurple ? 'purple' : 'green' }}>
                    I want to try a few new things with AI
                </p>
            </div>
            <button onClick={toggleTextColor}>Change Text Color</button>
            <div className="box-container">
                {rotatedBoxes.map((isRotated, index) => (
                    <div
                        key={index}
                        className={`box ${isRotated ? 'rotated' : ''}`}
                        onClick={() => handleBoxClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Page1;