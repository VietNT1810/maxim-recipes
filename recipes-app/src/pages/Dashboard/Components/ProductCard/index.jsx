import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

ProductCard.propTypes = {
    cards: PropTypes.array,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
};

ProductCard.defaultProps = {
    cards: [],
    onEdit: null,
    onDelete: null
}

function ProductCard(props) {
    const { cards, onDelete, onEdit } = props;

    const handleDeleteClick = (name, id) => {
        if (onDelete) {
            onDelete(name, id)
        }
    }

    const handleEditClick = (id) => {
        if (!onEdit) return;
        onEdit(id)
    }

    const handleTextareaTransform = (value) => {
        return value.replace(/--/g, '').split('\n')
    }

    return (
        <Col>
            <Row className="justify-content-between">
                <Col xs="auto"><h1>Products</h1></Col>
                <Col xs="auto" className="d-flex align-items-center">
                    <Button as={Link} to="/dashboard/products/create" variant="success">Add</Button>
                </Col>
            </Row>
            <Row className="gy-5">
                {
                    cards.map((card) => (
                        <Col className="col-2" key={card.id}>
                            <div className="card" style={{ width: 100 + "%" }}>
                                <img src={card.image.url} className="card-img-top" alt="Error getting image" />
                                <div className="card-body">
                                    <h6 className="recipes__title">{card.title}</h6>
                                    <div className="recipes__time">
                                        <span>
                                            <i className="bi bi-clock"></i>
                                            {card.times}
                                        </span>
                                    </div>
                                    <Row>
                                        <Col>
                                            <Button variant="outline-secondary" className="w-100" onClick={() => handleEditClick(card.id)} >Edit</Button>
                                        </Col>
                                        <Col>
                                            <Button variant="outline-danger" className="w-100" onClick={() => handleDeleteClick(card.image.name, card.id)}>Delete</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col >
                    ))
                }
            </Row>
        </Col>
    );
}

export default ProductCard;