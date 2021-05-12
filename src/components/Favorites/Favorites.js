import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import './Favorites.css'

const useStyles = makeStyles((theme) => ({
    rootCart: {
        marginLeft: '50px',
        marginTop: '30px',
    },
}));

const Favorites = () => {
    const classes = useStyles();
    const { getFavo, favorites, } = useContext(productsContext);

    useEffect(() => {
        getFavo()
    }, [])

    return (
        <>
            <div className='favo'>
                <h1>Your Favourites Products </h1>
                {favorites.products ? (
                    <div className='favo-block'>
                        {favorites.products.map(elem => (
                                <ul className='favo-items' key={elem.item.id}>
                                        <li>
                                        <h1>{elem.item.title}</h1>
                                        </li>
                                        <li>
                                            <img style={{ width: '100px' }} src={elem.item.image} alt='product-img' />
                                        </li>
                                        <li>
                                        <h2>{elem.item.price}</h2>
                                        </li>
                                </ul>
                        ))}
                    </div>
                ) : (<CircularProgress />)}
            </div>
        </>

    );
};

export default Favorites;