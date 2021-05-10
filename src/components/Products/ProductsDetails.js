import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { productsContext } from '../../contexts/ProductsContext';

const ProductsDetails = ({ props }) => {
    console.log(props);
    const { id } = useParams()
    const { productsDetails, getProductsDetails } = useContext(productsContext);

    useEffect(() => {
        getProductsDetails(id)
    }, [])

    return (
        <div>
                <h1>{productsDetails.title}</h1>
                <h2>{productsDetails.description}</h2>
                
        </div>
    );
};

export default ProductsDetails;