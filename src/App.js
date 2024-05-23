import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Header/Navbar';
import Home from './Component/Main/Home';
import MainScriptures from './Component/Main/Scriptures/MainScriptures';
import AboutUs from './Component/Other/AboutUs';
import ContactUs from './Component/Other/ContactUs';
import './tailwind.css';
import Footer from './Component/Footer/Footer';
import UpnishadPage from './Component/Main/Upnishad/UpnishadPage';
import IshaUpanishad from './Component/Main/Upnishad/IshaUpanishad';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scriptures" element={<MainScriptures />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/upnishad" element={<UpnishadPage />} />
            <Route path="/upnishad/isha-upanishad" element={<IshaUpanishad />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
