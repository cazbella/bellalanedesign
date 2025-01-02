import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Designs from './pages/Designs';
import CraftHobby from './pages/CraftHobby';
import PatternsPrints from './pages/PatternsPrints';
import DesignDetails from './pages/DesignDetails';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/designs/craft-hobby" element={<CraftHobby />} />
            <Route path="/designs/patterns-prints" element={<PatternsPrints />} />
            <Route path="/designs/:id" element={<DesignDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}