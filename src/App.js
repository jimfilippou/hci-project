import React from 'react';
// import Login from './components/login/Login';
import Main from './components/MainScreen/Main';
import './core.scss';
import CTX from './store';

function App() {
  return (
    <CTX.Provider value={{on: true}}>
      {/* <Login/> */}
      <Main/>
    </CTX.Provider>
  );
}

export default App;
