
import './App.css'
import { HelloWorld } from './HelloWorld.jsx'
import { Counter} from './Counter.jsx'

function App() {
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
            <HelloWorld fname="Fozzie" species="Bare"/>
            <Counter text="Clicks:" /> <Counter text="More Clicks:" /> <Counter text="Even More Clicks:" />
          </p>
        </div>
      </section>

      <section id="spacer"><p>Testing testing one two three.</p></section>
      

    </>
  )
}

export default App
