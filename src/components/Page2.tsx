import React, { useState } from 'react';
// import './Page.css'; // Assuming you have a CSS file for styling

const Page2: React.FC = () => {
    const [flippedBoxes, setFlippedBoxes] = useState<boolean[]>(Array(8).fill(false));

    const handleBoxClick = (index: number) => {
        const newFlippedBoxes = [...flippedBoxes];
        newFlippedBoxes[index] = !newFlippedBoxes[index];
        setFlippedBoxes(newFlippedBoxes);
    };

    return (
        <div className='pageLayout'>
            <div className='header'>
                <h1>Page 2</h1>
                <p>This is the content for the second page of the application.</p>
            </div>
            <div className="box-container">
                {flippedBoxes.map((isFlipped, index) => (
                    <div
                        key={index}
                        className={`box ${isFlipped ? 'flipped' : ''}`}
                        onClick={() => handleBoxClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Page2;