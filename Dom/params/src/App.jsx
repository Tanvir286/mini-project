
// Updated App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound'; // Add this import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2/:id/:name" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* Add fallback route */}
      </Routes>
    </Router>
  );
};

export default App;
