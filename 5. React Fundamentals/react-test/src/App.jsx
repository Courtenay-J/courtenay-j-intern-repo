import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { useTranslation } from 'react-i18next';
import { Profile } from './Profile.jsx';
import { Tests } from './Tests.jsx';
import { Home } from './Home.jsx';
import { FormikTest } from './FormikTest.jsx';


function App() {
  const [t] = useTranslation();

  return (
    <BrowserRouter>
    <div id="header">
      <nav class="py-3">
        <Link to="/"><button class="navbtn">{t('navBar.home')}</button></Link> {" "}
        <Link to="/Profile"><button class="navbtn">{t('navBar.profile')}</button></Link> {" "}
        <Link to="/Tests"><button class="navbtn">{t('navBar.tests')}</button></Link>
        <Link to="/FormikTest"><button class="navbtn">Formik</button></Link>
      </nav>
    </div>

    <hr></hr>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Tests" element={<Tests />} />
          <Route path="/FormikTest" element={<FormikTest />} />
        </Routes>
    <div id="footer"></div>
    </BrowserRouter>
  )
}

export default App
