import React, { useContext, useState } from 'react';
import { productsContext } from '../../contexts/ProductsContext';

const AddProducts = () => {

    const [product, setProduct] = useState({
        title:'',
        description:'',
        price:'',
        image:''
    })

    const handleValues = (e) => {
        let newProduct = {
            ...product,
            [e.target.name] : e.target.value
        }
        setProduct(newProduct);
        console.log(newProduct);
    }


    const handleClick = () => {
        postProduct(product)
        setProduct({
            title:'',
            description:'',
            price:'',
            image:''
        })
    }

    const { postProduct } = useContext(productsContext)

    return (
        <div>
            <input type='text' name='title' value={product.title} onChange={handleValues} placeholder='Title' />
            <input type='text' name='description' value={product.description} onChange={handleValues} placeholder='Description' />
            <input type='text' name='price' value={product.price} onChange={handleValues} placeholder='Price' />
            <input type='text' name='image' value={product.image} onChange={handleValues} placeholder='Image' />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddProducts;