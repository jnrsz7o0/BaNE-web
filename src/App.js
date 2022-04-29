import React from 'react' 
import './App.css';
import Navbar from './components/navbar/Navbar';
import Video from './components/video/Video';
import About from './components/about/About';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Video />
      <About />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
