import React from 'react';
import Login from './components/login/Login';
import CTX from './store';

function App() {
  return (
    <CTX.Provider value={{}}>
      <Login/>
    </CTX.Provider>
  );
}

export default App;
