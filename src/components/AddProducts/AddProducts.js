import React, { useContext, useState } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './AddProducts.css';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 290,
        color: 'red'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    // root: {
    //     display: 'flex',
    //     flexDirection: 'column'
    // }
}));

const AddProducts = () => {

    const classes = useStyles();

    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        image: '',
        category: ''
    })



    const handleValues = (e) => {
        let newProduct = {
            ...product,
            [e.target.name]: e.target.value
        }
        setProduct(newProduct);
        console.log(newProduct);
    }


    const handleClick = () => {
        postProduct(product)
        setProduct({
            title: '',
            description: '',
            price: '',
            image: '',
            category: ''
        })
    }

    const { postProduct } = useContext(productsContext)

    return (
        <>

            <div className='inps'>
                <input type='text' className='inp-add' name='title' value={product.title} onChange={handleValues} placeholder='Title' />
                <input type='text' className='inp-add' name='description' value={product.description} onChange={handleValues} placeholder='Description' />
                <input type='text' className='inp-add' name='price' value={product.price} onChange={handleValues} placeholder='Price' />
                <input type='text' className='inp-add' name='image' value={product.image} onChange={handleValues} placeholder='Image' />
            
            <div className={classes.root}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={product.category}
                        onChange={handleValues}
                        name='category'
                    >
                        <MenuItem value='Wall Split Type'>Wall Split Type</MenuItem>
                        <MenuItem value='Floor Standing Type'>Floor Standing Type</MenuItem>
                        <MenuItem value='Portable'>Portable</MenuItem>
                    </Select>
                </FormControl>
                <button className='btn-add' onClick={handleClick}>Add</button>

            </div>
            </div>
        </>
    );
};

export default AddProducts; 