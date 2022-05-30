import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Authentication/Login';
import Footer from './Pages/Shared/Footer';
import PrivacyPolicy from './Pages/Shared/PrivacyPolicy';
import TermsOfService from './Pages/Shared/TermsOfService';
import Register from './Pages/Authentication/Register';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/terms' element={<TermsOfService />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
