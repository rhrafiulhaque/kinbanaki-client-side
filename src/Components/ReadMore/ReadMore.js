import React, { useState } from 'react';
import './ReadMore.css';

const ReadMore = ({ message }) => {
    const [isReadMore, setReadMore] = useState(false);

    const toggleBtn = () => {
        setReadMore(!isReadMore);
    }
    return (
        <div>
            <p className='mb-0'>
                {isReadMore ? message : message.slice(0, 120)}
                <button onClick={toggleBtn} className="read-btn">{isReadMore ? 'Read Less' : '...ReadMore'}</button>
            </p>
        </div>
    );
};

export default ReadMore;