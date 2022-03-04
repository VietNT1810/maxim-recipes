import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import RecipesCard from './components/RecipesCard'

export default function Recipes() {
    return (
        <div>
            <Header />

            <div className="main" style={{ paddingTop: 2 + "rem", marginBottom: 5 + "rem" }}>
                <div className="container overflow-hidden">
                    <span>Homemade Recipes</span>
                    <RecipesCard />
                </div>
            </div>

            <Footer />
        </div>
    )
}
