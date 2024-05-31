import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Header/Navbar';
import Home from './Component/Main/Home';
import MainScriptures from './Component/Main/Scriptures/MainScriptures';
import AboutUs from './Component/Other/AboutUs';
import ContactUs from './Component/Other/ContactUs';
import './tailwind.css';
import Footer from './Component/Footer/Footer';
import KenaUpnishad from './Component/Main/Upnishad/KenaUpnishad'
import BookDetail from './Component/Main/Scriptures/BookDetail';
import IshaUpanishad from './Component/Main/Upnishad/IshaUpanishad';
import KathaUpanishad from './Component/Main/Upnishad/KathaUpanishad';
import Rigveda from './Component/Main/Vedas/Rigveda';
import Samaveda from './Component/Main/Vedas/Samaveda';
import Yajurveda from './Component/Main/Vedas/Yajurveda';
import Atharvaveda from './Component/Main/Vedas/Atharvaveda';
import RamayanaHindi from './Component/Main/Epics/RamayanaHindi';
import RamayanaEnglish from './Component/Main/Epics/RamayanaEnglish';
import MahabharataHindi from './Component/Main/Epics/MahabharataHindi';
import MahabharataEnglish from './Component/Main/Epics/MahabharataEnglish';
import BhagavadGitaHindi from './Component/Main/Geeta/BhagavadGitaHindi';
import BhagavadGitaEnglish from './Component/Main/Geeta/BhagavadGitaEnglish';
import PrashnaUpanishad from './Component/Main/Upnishad/PrashnaUpanishad';
import MandukyaUpanishad from './Component/Main/Upnishad/MandukyaUpanishad';
import TaittiriyaUpanishad from './Component/Main/Upnishad/TaittiriyaUpanishad';
import AitareyaUpanishad from './Component/Main/Upnishad/AitareyaUpanishad';
import ChandogyaUpanishad from './Component/Main/Upnishad/ChandogyaUpanishad';
import BrihadaranyakaUpanishad from './Component/Main/Upnishad/BrihadaranyakaUpanishad';
import ShvetashvataraUpanishad from './Component/Main/Upnishad/ShvetashvataraUpanishad';

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scriptures/:category" element={<MainScriptures />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* Route for displaying book details */}
            <Route path="/scriptures/:category/:id" element={<BookDetail />} />
            {/* Route for Upnishad book details */}
            <Route path="/scriptures/:category/:id/Kena Upanishad" element={<KenaUpnishad />} />
            <Route path="/scriptures/:category/:id/Isha Upanishad" element={<IshaUpanishad />} />
            <Route path="/scriptures/:category/:id/Katha Upanishad" element={<KathaUpanishad />} />
            <Route path="/scriptures/:category/:id/Prashna Upanishad" element={<PrashnaUpanishad />} />
            <Route path="/scriptures/:category/:id/Mandukya Upanishad" element={<MandukyaUpanishad />} />
            <Route path="/scriptures/:category/:id/Taittiriya Upanishad" element={<TaittiriyaUpanishad />} />
            <Route path="/scriptures/:category/:id/Aitareya Upanishad" element={<AitareyaUpanishad />} />
            <Route path="/scriptures/:category/:id/Chandogya Upanishad" element={<ChandogyaUpanishad />} />
            <Route path="/scriptures/:category/:id/Brihadaranyaka Upanishad" element={<BrihadaranyakaUpanishad />} />
            <Route path="/scriptures/:category/:id/Shvetashvatara Upanishad" element={<ShvetashvataraUpanishad />} />
            {/* Route for Vedas book details */}
            <Route path="/scriptures/:category/:id/Rigveda" element={<Rigveda />} />
            <Route path="/scriptures/:category/:id/Samaveda" element={<Samaveda />} />
            <Route path="/scriptures/:category/:id/Yajurveda" element={<Yajurveda />} />
            <Route path="/scriptures/:category/:id/Atharvaveda" element={<Atharvaveda />} />
            {/* Route for Epics book details */}
            <Route path="/scriptures/:category/:id/Ramayana Hindi" element={<RamayanaHindi />} />
            <Route path="/scriptures/:category/:id/Ramayana English" element={<RamayanaEnglish />} />
            <Route path="/scriptures/:category/:id/Mahabharata Hindi" element={<MahabharataHindi />} />
            <Route path="/scriptures/:category/:id/Mahabharata English" element={<MahabharataEnglish />} />

            {/* Route for Geeta book details */}
            <Route path="/scriptures/:category/:id/Bhagavad Gita Hindi" element={<BhagavadGitaHindi />} />
            <Route path="/scriptures/:category/:id/Bhagavad Gita English" element={<BhagavadGitaEnglish />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
