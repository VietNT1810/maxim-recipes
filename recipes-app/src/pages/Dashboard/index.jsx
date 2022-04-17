import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddEdit from './AddEdit/AddEdit';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home';
import Products from './Pages/Products/Products';
import Users from './Pages/Users/Users';

function Dashboard() {
    return (
        <>
            <Sidebar />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="users" element={<Users />} />
                <Route path="products/list" element={<Products />} />
                <Route path="products/create" element={<AddEdit />} />
                <Route path="products/edit/:recipeID" element={<AddEdit />} />
            </Routes>
        </>
    );
}

export default Dashboard;