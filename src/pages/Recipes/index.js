import { collection, getDocs, limit, query, startAfter } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { db } from '../../firebase';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import RecipesCard from './components/RecipesCard';


export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [lastDoc, setLastDoc] = useState();
    const recipesCollection = collection(db, 'recipes');
    const [isEmpty, setIsEmpty] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const queryRecipes = query(recipesCollection, limit(12));
            // const queryData = await getDocs(queryRecipes)
            //     .then(() => {
            //         updateState(queryData);
            //         setLoading(false);
            //     })

            try {
                const queryData = await getDocs(queryRecipes);
                updateState(queryData);
                setLoading(false);

            } catch (error) {
                console.log("Error getting cached document:", error);
            }
        }
        getData();
    }, [])

    const updateState = (data) => {
        const isCollectionEmpty = data.docs.length === 0;
        console.log(data.docs.length);
        if (!isCollectionEmpty) {
            setRecipes(recipes.concat(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
            setLastDoc(data.docs[data.docs.length - 1]);
        } else {
            setIsEmpty(true);
        }

    }

    const getMore = async () => {
        const queryRecipes = query(recipesCollection, startAfter(lastDoc), limit(12));
        const queryData = await getDocs(queryRecipes)
        updateState(queryData);
        setLoading(false);
    }

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

                    <RecipesCard recipes={recipes} loading={loading} />

                    {!isEmpty && <div className="recipes__button">
                        <Button
                            variant="outline-warning"
                            onClick={getMore}
                        >
                            SHOW MORE
                        </Button>
                    </div>}
                </div>
            </div>

            <Footer />
        </div >
    )
}
