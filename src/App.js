import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/termsOfService' element={<Home />} />
        <Route path='/privacyPolicy' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
