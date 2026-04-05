import { ResponsiveList } from './components/ResponsiveList.jsx'
import { UseCallbackParent } from './components/UseCallbackParent.jsx'
import { Counter } from './components/Counter.jsx'

export function Profile() {
  return (
    <>
        <h1>- About Me -</h1>
        <p>
            You've reached the dummy profile page of Courtenay J.
            <br></br>
            Please leave a message after the tone.
        </p>

        <hr></hr>

      <UseCallbackParent />
      <p><Counter /></p>
    </>
  );
} 