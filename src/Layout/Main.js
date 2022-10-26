import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from '../Pages/Shared/Header/Header';

import { useState } from 'react';

const Main = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div data-theme={theme}>
      <Header theme={theme} setTheme={setTheme}></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;