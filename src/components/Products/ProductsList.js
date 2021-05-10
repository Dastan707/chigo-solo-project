import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { productsContext } from '../../contexts/ProductsContext';
import ProductsCard from './ProductsCard'
import ProductsImage from '../../assets/img/product-list-img.jpg'
const ProductsList = () => {
    const history = useHistory();
    const { productsData, getProducts } = useContext(productsContext);


    useEffect(() => {
        getProducts(history)
    }, [])
    
    return (
        <div className='products'>
            <img style={{width : '1300px'}} src={ProductsImage} />
            {productsData.map(item => (
                <ProductsCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ProductsList;