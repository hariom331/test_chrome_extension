import './App.css';
import Form from './components/Form';
import Check from './components/Check';
import VideoSnippet from './components/VideoSnippet';
import Admin from './components/Admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import ImgTab from './components/ImgTab';

function App() {
  const [uid, setuid] = useState("Hello");
  // console.log(uid,"from parent");
  return (
    <>
    <BrowserRouter>
      <Routes>
            <Route exact path="/" element={<Form uid={uid} setuid={setuid}/>} />
            <Route exact path="/check" element={<Check />} />
            <Route exact path="/check/starttest" element={<VideoSnippet uid={uid}  />} />
            <Route exact path="/admin" element={<Admin  />} />
            {/* <Route exact path="/register/images/:id" element={<ImgTab />} /> */}

      </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
