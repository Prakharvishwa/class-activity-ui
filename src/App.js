import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Google from './components/Google';
import Tesla from './components/Tesla';
import SpaceX from './components/SpaceX';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/google" element={<Google />} />
        <Route path="/tesla" element={<Tesla />} />
        <Route path="/spacex" element={<SpaceX />} />
      </Routes>
    </Router>
  );
}

export default App;