import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { Profile } from './Profile.jsx';
import { Tests } from './Tests.jsx';
import { Home } from './Home.jsx';

function App() {
  return (
    <BrowserRouter>
    <div id="header">
      <nav>
        <Link to="/Home">Home</Link> | {" "}
        <Link to="/Profile">Profile</Link> | {" "}
        <Link to="/Tests">Tests</Link>
      </nav>
      <hr></hr>
    </div>

    <div id="spacer"></div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Tests" element={<Tests />} />
      </Routes>
    <div id="footer"></div>
    </BrowserRouter>
  )
}

export default App
