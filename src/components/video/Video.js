import React from 'react'
import MainVideo from '../../assets/hexPulse.mp4'
import './Video.css'

const video = () => {
    return (
        <div className='video'>
            <video autoPlay loop muted id='video'>
                <source src={MainVideo} type='video/mp4'/>
            </video>
            <div className='video-text'>
                <h1> <span className='blue'>Ba</span>re-metal <span className='blue'>N</span>ode <span className='blue'>E</span>rector</h1>
                <p>A Decentralized Oracle Network providing secure and simple Chainlink node management.</p>
                <div className='btn-group'>
                    <button className='btn'>button 1</button>
                    <button className='btn'>Documentation</button>
                    {/* <button className='btn'>button 3</button> */}
                </div>
                <div className='bottom-text'>
                    <h2>Some additional text here</h2>
                </div>
            </div>
        </div>
    )
}
export default video