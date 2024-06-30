import React from 'react';

function BridelCollections({product}) {
    return (
        <div>
            <div className="cards">
                <img src={product.thumbnail} alt={product.title} />
            </div>
        </div>

    );
}

export default BridelCollections;
