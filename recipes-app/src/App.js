import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Login from './pages/components/Login/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home/Home';
import Recipes from './pages/Recipes/index';
import RecipeDetail from './pages/Recipes/RecipeDetail/RecipeDetail';
import Saved from './pages/Saved/Saved';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes/detail/:recipeID" element={<RecipeDetail />} />
          <Route path="/recipes/detail" element={<RecipeDetail />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
