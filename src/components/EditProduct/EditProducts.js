import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import './EditProducts.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './EditProducts.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 270,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    select: {
        height: '50px'
    }
}));


const EditProducts = (props) => {
    const classes = useStyles();
    const { productToEdit, saveProduct } = useContext(productsContext);
    const [newEditItem, setNewEditItem] = useState(productToEdit)

    useEffect(() => {
        setNewEditItem(productToEdit)
    }, [productToEdit]);

    function handleInputTitle(e) {
        let newEditedProduct = {
            ...newEditItem,
            title: e.target.value
        }
        setNewEditItem(newEditedProduct)
    }

    function handleInputDesc(e) {
        let newEditedProduct = {
            ...newEditItem,
            description: e.target.value
        }
        setNewEditItem(newEditedProduct)
    }

    function handleInputPrice(e) {
        let newEditedProduct = {
            ...newEditItem,
            price: e.target.value
        }
        setNewEditItem(newEditedProduct)
    }

    function handleInputImage(e) {
        let newEditedProduct = {
            ...newEditItem,
            image: e.target.value
        }
        setNewEditItem(newEditedProduct)
    }

    function handleInputCategory(e) {
        let newEditedProduct = {
            ...newEditItem,
            category: e.target.value
        }
        setNewEditItem(newEditedProduct)
    }

    return (
        <>
            <div className='inps-edit'>
                {/* <div className={classes.root}> */}
                <input type='text' className='inp-edit' name='title' value={newEditItem.title} onChange={handleInputTitle} placeholder='Title' />
                <input type='text' className='inp-edit' name='description' value={newEditItem.description} onChange={handleInputDesc} placeholder='Description' />
                <input type='text' className='inp-edit' name='price' value={newEditItem.price} onChange={handleInputPrice} placeholder='Price' />
                <input type='text' className='inp-edit' name='image' value={newEditItem.image} onChange={handleInputImage} placeholder='Image' />
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">{newEditItem.category}</InputLabel>
                    <Select
                        className={classes.select}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={product.category}
                        onChange={handleInputCategory}
                        name='category'
                    >
                        <MenuItem value='Wall Split Type'>Wall Split Type</MenuItem>
                        <MenuItem value='Floor Standing Type'>Floor Standing Type</MenuItem>
                        <MenuItem value='Portable'>Portable</MenuItem>
                    </Select>
                </FormControl>
                <button className='btn-edit' onClick={() => saveProduct(newEditItem, props.history)}>Save</button>
                {/* </div> */}
            </div>
        </>
    );
};

export default EditProducts;