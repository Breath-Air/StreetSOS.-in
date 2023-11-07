import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Photos from './pages/Photos'
import Camera from './pages/Camera';
import { useState } from 'react';

function App() {

  const [selected, setSelected] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Photos' element={<Photos selected={ selected } setSelected={setSelected}/>} />
          {/* <Route path='/camera' element={<Camera />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
