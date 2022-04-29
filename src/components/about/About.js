import React from 'react';
import './About.css'
import {SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si';
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
                        <AboutCard icon={<SiHiveBlockchain className='icon' />} heading='Scaleable' text='Setup nodes and databases in the time it takes to make a cup of coffee.'/>
                    </div>
                    <div className="card">
                        <AboutCard icon={<SiStrapi className='icon' />} heading='heading 2' text='Lorum ipsum and so on'/>
                    </div>
                    <div className="card">
                        <AboutCard icon={<SiFsecure className='icon' />} heading='Scaleable' text='Lorum ipsum and so on'/>
                    </div>
                    <div className="card">
                        <AboutCard icon={<VscServerProcess className='icon' />} heading='Scaleable' text='Lorum ipsum and so on'/>
                    </div>
                </div>
                <a href='/' className='btn'>Button 2</a>
            </div>
        </div>
    )
}

export default About