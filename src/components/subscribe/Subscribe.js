import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='content'>
                <h2>Join the BaNE mailing list</h2>
                <form action='https://getform.io/f/45651994-1762-4ce2-bc35-e8113901d751' method='POST'>
                    <div className='form-container display-col'>
                        <input type='email' name='email' placeholder='Enter your email' />
                        <button className='btn'>Sign up</button>
                    </div>
                    {/* <div className='form-container'>
                        <input type='checkbox'/> <p>Yes, I agree to recieve email communications from BaNE</p>
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default Subscribe