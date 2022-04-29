import React from 'react' 
import './App.css';
import Navbar from './components/navbar/Navbar';
import Video from './components/video/Video';
import About from './components/about/About'

function App() {
  return (
    <div>
      <Navbar />
      <Video />
      <About />
    </div>
  );
}

export default App;
