import { useState } from 'react'
import {createCounter, increase, decrease, reset} from './models/counter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(createCounter())

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Counter: {count.value}</p>
        <button onClick={() => setCount(increase)}>
          increase
        </button>
        <button onClick={() => setCount((count) => decrease(count))}>
          decrease
        </button>
        <button onClick={() => setCount((count) => reset(count))}>
          reset
        </button>
      </div>
    </>
  )
}

export default App
