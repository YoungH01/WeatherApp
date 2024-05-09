import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherHomework from './WeatherApp/WeatherHomework'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherHomework/>
    </>
  )
}

export default App
