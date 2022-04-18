import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import RecipesCard from './components/RecipesCard'

export default function Recipes() {
    return (
        <div>
            <Header />

            <div className="main" style={{ paddingTop: 2 + "rem", marginBottom: 5 + "rem" }}>
                <div className="container">
                    <h1 style={{ marginBottom: 30, textAlign: "center" }}><i>Recipes</i></h1>
                    <p className="intro">Explore our huge selection of delicious recipe ideas including; easy desserts, delicious vegan and vegetarian dinner ideas, gorgeous pasta recipes, quick bakes, family-friendly meals and gluten-free recipes.</p>

                    <RecipesCard />
                </div>
            </div>

            <Footer />
        </div>
    )
}
