import { useState } from 'react'
import './App.css'
import { HelloWorld } from './HelloWorld.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>- Test Page -</h1>
          <p>
            This is a stripped down version of the template, so I can test code stuff out.
          </p>
          <p>
            It'd be nice if VS Code would stop recommending sentences for me to type here.
          </p>
          <p>
            <HelloWorld name="Fozzie" />
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <section id="spacer"><p>Testing testing one two three.</p></section>

    </>
  )
}

export default App
