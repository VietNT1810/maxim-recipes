import { collection, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState, useRef } from 'react';
import { db } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import RecipesCard from '../Recipes/components/RecipesCard';
import "./Saved.scss";

export default function Saved() {
    const currentUser = useAuth();
    const [recipes, setRecipes] = useState([]);
    const isFirstRun = useRef(true);

    useEffect(() => {
        //Prevent first run of useEffect
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        //Get saved recipes from database
        const getSavedRecipes = async () => {
            const usersDoc = doc(db, "users", currentUser.uid);
            const savedCollection = collection(usersDoc, 'saved');
            const querySnapshot = await getDocs(savedCollection);
            setRecipes(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getSavedRecipes();
    }, [currentUser])


    return (
        <>
            <Header />

            <div className="main" style={{ paddingTop: 2 + "rem", marginBottom: 5 + "rem" }}>
                <div className="container">
                    <h1
                        style={{ marginBottom: 30, textAlign: "center" }}
                    >
                        <i>Saved Recipes</i>
                    </h1>

                    <RecipesCard recipes={recipes} />
                </div>
            </div>

            <Footer />
        </>
    )
}
