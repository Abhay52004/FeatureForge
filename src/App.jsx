import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import WeatherComponent from './components/WeatherComponent';
import ShopComponent from './components/ShopComponent';
import RecipesComponent from './components/RecipesComponent';
import Contact from './components/Contact';
import './App.css'

function App() {
  return (
    /* Add the basename prop here */
    <Router basename="/featureforge"> 
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<WeatherComponent />} />
        <Route path="/shop" element={<ShopComponent />} />
        <Route path="/recipes" element={<RecipesComponent />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
