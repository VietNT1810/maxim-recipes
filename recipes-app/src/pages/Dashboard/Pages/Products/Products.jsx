import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { db, storage } from '../../../../firebase';
import ProductCard from '../../Components/ProductCard';

export default function Products() {
    const [cards, setCards] = useState([]);
    const [update, setUpdate] = useState(0); //Force update
    const navigate = useNavigate();

    const recipesCollectionRef = collection(db, "recipes")

    useEffect(() => {
        const getRecipes = async () => {
            const data = await getDocs(recipesCollectionRef);
            setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getRecipes();
    }, [update])

    const handleDelete = async (name, id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('ID:', id);
                console.log("name:", name);

                const recipeDoc = doc(db, "recipes", id);
                deleteDoc(recipeDoc);
                const imageRef = ref(storage, `images/${name}`);
                deleteObject(imageRef).then(() => {
                    Swal.fire(
                        'Deleted!',
                        'Your recipe has been deleted.',
                        'success'
                    )
                    setUpdate(value => value + 1); //Force update by change the state
                })


            }
        })
    }

    const handleEdit = (id) => {
        navigate(`/dashboard/products/edit/${id}`)
    }

    return (
        <div className="products" style={{ marginLeft: 250 }}>
            <Container fluid>
                <Row className="flex-nowrap">
                    <ProductCard cards={cards} onDelete={handleDelete} onEdit={handleEdit} />
                </Row>
            </Container>
        </div>
    )
}
