import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarComponent,AboutComponent,BannerComponent,Projects,SkillsComponent,ContactComponent,Footer} from './index';
import { BrowserRouter } from 'react-router-dom';


import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarComponent/> 
        <BannerComponent/>
        <AboutComponent/>
        <Projects/>
        <SkillsComponent/>
        <ContactComponent/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
