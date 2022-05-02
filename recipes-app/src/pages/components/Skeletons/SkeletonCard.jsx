import React from 'react';
import SkeletonElement from './SkeletonElement'

function SkeletonCard(props) {
    return (
        <div className="skeleton__wrapper">
            <div className="skeleton__card">
                <SkeletonElement type='image' />
                <SkeletonElement type='time' />
                <SkeletonElement type='title' />
            </div>
        </div>
    );
}

export default SkeletonCard;