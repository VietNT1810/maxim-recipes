import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Recipes from './pages/Recipes/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li><Link to="/">Go to home page</Link></li>
          <li><Link to="/about">Go to about page</Link></li>
          <li><Link to="/recipes">Go to recipes page</Link></li>
          <li><Link to="/recipes/add">Go to Add new recipes page</Link></li>
          <li><Link to="/recipes/edit">Go to Edit recipes page</Link></li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/*" element={<Recipes />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
