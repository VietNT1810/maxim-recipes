import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Recipes from './pages/Recipes/index';
import RecipeDetail from './pages/Recipes/RecipeDetail/RecipeDetail';
import Dashboard from './pages/Dashboard/Main/Dashboard'
import AddEdit from './pages/Dashboard/AddEdit/AddEdit';
import Users from './pages/Dashboard/Users/Users';
import Products from './pages/Dashboard/Products/Products';

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/add" element={<AddEdit />} />
          <Route path="/dashboard/edit/:recipeID" element={<AddEdit />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
