import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarComponent,AboutComponent,BannerComponent,Projects} from './index';
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
      </BrowserRouter>
    </>
  )
}

export default App
