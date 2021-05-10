import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import './EditProducts.css'

const EditProducts = (props) => {
    const { productToEdit, saveProduct } = useContext(productsContext);
    const [newEditItem, setNewEditItem] = useState(productToEdit)

    useEffect(() => {
        setNewEditItem(productToEdit)
    },[productToEdit]);

    function handleInputTitle(e){
        let newEditedProduct = {
            ...newEditItem,
            title: e.target.value
        }
        setNewEditItem(newEditedProduct)
    }

    function handleInputDesc(e){
        let newEditedProduct = {
            ...newEditItem,
            description: e.target.value
        }
        setNewEditItem(newEditedProduct)
    }

    function handleInputPrice(e){
        let newEditedProduct = {
            ...newEditItem,
            price: e.target.value
        }
        setNewEditItem(newEditedProduct)
    }

    function handleInputImage(e){
        let newEditedProduct = {
            ...newEditItem,
            image: e.target.value
        }
        setNewEditItem(newEditedProduct)
    }
    return (
        <div>
            <input type='text' name='title' value={newEditItem.title} onChange={handleInputTitle}  placeholder='Title' />
            <input type='text' name='description' value={newEditItem.description} onChange={handleInputDesc} placeholder='Description' />
            <input type='text' name='price' value={newEditItem.price} onChange={handleInputPrice} placeholder='Price' />
            <input type='text' name='image' value={newEditItem.image} onChange={handleInputImage} placeholder='Image' />
            <button onClick={() => saveProduct(newEditItem, props.history)}>Save</button>
        </div>
    );
};

export default EditProducts;