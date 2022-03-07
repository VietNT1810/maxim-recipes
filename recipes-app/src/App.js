import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Recipes from './pages/Recipes/index';
import RecipeDetail from './pages/Recipes/RecipeDetail/RecipeDetail';
import Dashboard from './pages/Dashboard/Main/Dashboard'
import AddEdit from './pages/Dashboard/AddEdit/AddEdit';
import Users from './pages/Dashboard/Users/Users';
import Products from './pages/Dashboard/Products/Products';
import Login from './pages/components/Login/Login';
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
          <Route path="/dashboard" element={<Navigate replace to="/dashboard/products" />} />
          <Route path="/dashboard/add" element={<AddEdit />} />
          <Route path="/dashboard/edit/:recipeID" element={<AddEdit />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
