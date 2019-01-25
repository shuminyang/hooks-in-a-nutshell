import React from 'react';
import './App.css';
import LightbulbSvg from './LightBulb';

const App: React.FunctionComponent = () => {
  return (
    <div className='App'>
      <div>
        <LightbulbSvg fillColor='blue' />
      </div>
    </div>
  )
}

export default App;
