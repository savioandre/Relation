import React, { useEffect } from 'react';
import Main from '../components/Channel_Main/Main';
import Estudos from '../components/pages/Estudos';
import DarkMode from './dark';

const App = () => {
  useEffect(() => {
    DarkMode();
  });
  return (
    <Main />
  )
}

export default App;
