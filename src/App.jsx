import { useState } from 'react'
import bibekPP from './assets/BibekDhakal.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://dhakalbibek.com.np/" target="_blank">
          <img src={bibekPP} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Bibek Dhakal</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          How many time you want to meet Bibek?{count}
        </button>
        <p>
          Meet <code>Bibek</code> and do business or Tech 😉
        </p>
      </div>
      <p className="read-the-docs">
        2026.0.0.1
      </p>
    </>
  )
}

export default App
