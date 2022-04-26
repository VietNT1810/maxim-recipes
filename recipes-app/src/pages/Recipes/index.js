import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import RecipesCard from './components/RecipesCard'

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const getRecipes = async () => {
            const recipesCollectionRef = collection(db, "recipes")
            const data = await getDocs(recipesCollectionRef);
            setRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getRecipes();
    }, [])

    return (
        <div>
            <Header />

            <div className="main" style={{ paddingTop: 2 + "rem", marginBottom: 5 + "rem" }}>
                <div className="container">
                    <h1
                        style={{ marginBottom: 30, textAlign: "center" }}
                    >
                        <i>Recipes</i>
                    </h1>
                    <p
                        className="intro"
                        style={{ textAlign: "center", marginBottom: "2rem" }}
                    >
                        Explore our huge selection of delicious recipe ideas including; easy desserts, delicious vegan and vegetarian dinner ideas, gorgeous pasta recipes, quick bakes, family-friendly meals and gluten-free recipes.
                    </p>

                    <RecipesCard recipes={recipes} />
                </div>
            </div>

            <Footer />
        </div >
    )
}
