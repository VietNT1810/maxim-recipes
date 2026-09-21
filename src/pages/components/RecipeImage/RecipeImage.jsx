import React, { useState } from 'react';

const PLACEHOLDER = '/recipe-placeholder.png';

export default function RecipeImage({ src, className, alt, width, style }) {
    const [imgSrc, setImgSrc] = useState(src);
    return (
        <img
            src={imgSrc}
            className={className}
            alt={alt}
            width={width}
            style={style}
            onError={() => setImgSrc(PLACEHOLDER)}
        />
    );
}
