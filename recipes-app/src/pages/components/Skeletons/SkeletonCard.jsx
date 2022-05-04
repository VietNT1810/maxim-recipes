import React from 'react';
import { Col } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonCard(props) {
    return (
        <Col className="col-3" style={{ cursor: 'wait' }}>
            <div className="card" style={{ width: "100%", height: "100%" }}>
                <img src={require('../../../assets/images/skeletonImg.png')} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="skeleton__time" style={{ marginBottom: '20px' }}>
                        <span>
                            <Skeleton circle width="15px" inline style={{ marginRight: '5px' }} />
                            <Skeleton width="100px" />
                        </span>
                    </div>
                    <h5 className="recipes__title"><Skeleton count={3} /></h5>
                </div>
            </div>
        </Col>
    );
}

export default SkeletonCard;