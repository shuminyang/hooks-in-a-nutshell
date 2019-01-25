import React, { useState } from 'react'
import './App.css'
import LightbulbSvg from './LightBulb'

const App: React.FunctionComponent = () => {
  const [light, setLight] = useState<number>(0)

  const setOff = (): void => setLight(0)

  const setOn = (): void => setLight(1)

  const fillColor: string = light === 1 ? '#ffbb73' : '#000'

  return (
    <div className='App'>
      <div>
        <LightbulbSvg fillColor={fillColor} />
      </div>

      <button onClick={setOff}>Off</button>
      <button onClick={setOn}>On</button>
    </div>
  )
}

export default App
