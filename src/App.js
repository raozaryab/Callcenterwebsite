import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import HowItWork from './HowItWork';
import Aboutus from './Aboutus';
import Service from './Service';
import Contact from './Contact';

const App = ()=>{
  return(
    <>
    <Navbar/>
    <Header/>
    <HowItWork/>
    <Aboutus/>
    <Service/>
    <Contact/>
    </>

  );
}

export default App;