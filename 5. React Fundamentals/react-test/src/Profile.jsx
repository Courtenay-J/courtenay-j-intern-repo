import { ResponsiveList } from './ResponsiveList.jsx'

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

        <h2>To-Do List:</h2>
        <p>
            <ResponsiveList />
        </p>
    </>
  );
}