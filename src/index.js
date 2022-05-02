import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Totais from './pages/Estudos';
import DarkMode from './scripts/dark';
import {redirectURL, setProfile} from './manager';
import NotFound from './pages/404';
import App from './scripts/App';
import './data/totalData.ts';
import './data/data.ts';
import './index.css';

redirectURL();

export default function Index() {
    useEffect(() => {
      setProfile();
      DarkMode();
    })

  return (
    <BrowserRouter>
      <Routes path="/" >
        <Route index path="atividades" element={<App />} />
        <Route path="totais" element={<Totais />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);