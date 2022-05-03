import React from 'react';
import './About.css'
import {SiHiveBlockchain, SiChainlink, SiFsecure} from 'react-icons/si';
import {FaLock} from 'react-icons/fa';
import {VscServerProcess} from 'react-icons/vsc';
import AboutCard from './AboutCard';

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <h2>Sample Text 1</h2>
                <p>sample description</p>
                <div className="card-container">
                    <div className="card">
                        <AboutCard icon={<SiHiveBlockchain className='icon' />} heading='Scaleable' text='Build nodes on whatever hardware you want, just SSH in and get started.'/>
                    </div>
                    <div className="card">
                        <AboutCard icon={<SiChainlink className='icon' />} heading='Trusted' text='Be a part of the most trusted oracle network in crypto, provide quality data to leading DeFi protocols.'/>
                    </div>
                    <div className="card">
                        <AboutCard icon={<FaLock className='icon' />} heading='Secure' text='Build on secure mechanisms like SSH for direct node management from bare-metal resources, no docker necessary!'/>
                    </div>
                    <div className="card">
                        <AboutCard icon={<VscServerProcess className='icon' />} heading='Simple' text='Setup nodes and databases in the time it takes to make a cup of coffee.'/>
                    </div>
                </div>
                <a href='/' className='btn'>Button 2</a>
            </div>
        </div>
    )
}

export default About