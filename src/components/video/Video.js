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
                <h1> <span className='green'>Ba</span>re-metal <span className='green'>N</span>ode <span className='green'>E</span>rector</h1>
                <p><span className='green'>A Decentralized Oracle Network providing secure and simple Chainlink node management.</span></p>
                <div className='btn-group'>
                    <button className='btn'>button 1</button>
                    <button className='btn btn-outline'>Documentation</button>
                    <button className='btn'>button 3</button>
                </div>
            </div>
        </div>
    )
}
export default video