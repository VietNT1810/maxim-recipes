import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register';
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
          <Route path="/saved" element={<Saved />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
