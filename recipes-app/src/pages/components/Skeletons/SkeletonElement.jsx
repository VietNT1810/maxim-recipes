import React from 'react';
import './Skeleton.scss'

function skeletonElement({ type }) {
    const classes = `skeleton skeleton__${type}`

    return (
        <div className={classes}>

        </div>
    );
}

export default skeletonElement;