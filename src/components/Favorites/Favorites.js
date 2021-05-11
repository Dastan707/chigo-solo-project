import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

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
                {favorites.products ? (
                    <div className='favo-block'>
                        {favorites.products.map(elem => (
                                <ul key={elem.item.id}>

                                            <img style={{ width: '100px' }} src={elem.item.image} alt='product-img' />
                                        <h1>{elem.item.title}</h1>
                                        <h2>{elem.item.price}</h2>
                                </ul>
                        ))}
                    </div>
                ) : (<CircularProgress />)}
            </div>
        </>

    );
};

export default Favorites;