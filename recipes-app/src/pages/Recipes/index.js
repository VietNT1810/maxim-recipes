import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import AddEdit from './AddEdit/AddEdit'
import RecipeDetail from './RecipeDetail/RecipeDetail'

export default function Recipes() {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="/add" element={<AddEdit />} />
                <Route path="/edit" element={<AddEdit />} />
                <Route path="/recipe-detail" element={<RecipeDetail />} />
            </Routes>
        </div>
    )
}
