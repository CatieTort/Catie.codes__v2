import React from 'react'; 
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Work from './Components/Work';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Banner from './Components/Banner';

library.add(fab);

function App() {


  return (
   <>
      <Navbar />
      <Banner />
      <About />
      <Work />
      <Resume />
      <Contact />
   </>
  );
}

export default App;
