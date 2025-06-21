import React from 'react';
import { BrowserRouter as Router,Routes,Route } 
from 'react-router-dom'

import Home from './components/Home';
import Myblogs from './components/myblogs';
import Addblogs from './components/addblogs';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
           <Route path="/myblogs" element={<Myblogs/>}/>
            <Route path="/addblogs" element={<Addblogs/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
