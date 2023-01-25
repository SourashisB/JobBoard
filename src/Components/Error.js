import React from 'react';
import '../CSS/Error.css'

const Error = () => {
    return (
        <>
        <div className="error-page">
           <div className='content'>
            <h3>Error</h3>
            <p> Opps! Something went wrong. Please try again later</p>
            <div className="btns">
                <a href="#">OK</a>
            </div>
            </div>
        </div>
        </>
    )
}

export default Error;