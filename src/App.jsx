import { useState } from 'react'
import {NavbarComponent,AboutComponent} from './index';
import { BrowserRouter } from 'react-router-dom';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavbarComponent/>  
      </BrowserRouter>
    </>
  )
}

export default App
