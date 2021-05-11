import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { productsContext } from '../../contexts/ProductsContext';
import './ProductsDetails.css'

const ProductsDetails = ({ props }) => {
    // console.log(props);
    const { id } = useParams()
    const { productsDetails, getProductsDetails } = useContext(productsContext);

    useEffect(() => {
        getProductsDetails(id)
    }, [])

    return (
        <>
        <div className='details'>
            <div className='details-img'>
                <img src={productsDetails.image} alt="chigo" />
                
            </div>
            <div className='details-desc'>
                <h3>{productsDetails.category}</h3>
                <h1>{productsDetails.title}</h1>
                <p>{productsDetails.description}</p>
            </div>
        </div>
        <div className='comments'>
            <input type='text' />
        </div>
            <img style={{ width: '100%' }} src='http://www.chigogroup.com/upload/ueditor/20200607/202006071820429957.jpg' />
            </>
    );
};

export default ProductsDetails;