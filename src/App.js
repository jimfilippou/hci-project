import React from 'react';
// import Login from './components/login/Login';
import Main from './components/main/main';
import './core.scss';
import CTX from './store';

function App() {
  return (
    <CTX.Provider value={{}}>
      {/* <Login/> */}
      <Main/>
    </CTX.Provider>
  );
}

export default App;
