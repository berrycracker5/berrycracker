import React, { useState } from 'react';
import Main from './Main';
import MainWrapper from './MainWrapper';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className="App">

      {/* <!-- Wrapper --> */}
      <div id="wrapper">
        <MainWrapper />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
