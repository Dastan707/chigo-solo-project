import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { productsContext } from '../../contexts/ProductsContext';
import ProductsCard from './ProductsCard'
import ProductsImage from '../../assets/img/product-list-img.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Sidebar from '../HomePage/Sidebar';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const ProductsList = () => {
    const classes = useStyles();
    const history = useHistory();
    const { productsData, getProducts, paginationPages } = useContext(productsContext);
    


    function getPage(){
        const search = new URLSearchParams(history.location.search)
        return search.get('_page')
    }

    const [page, setPage] = useState(getPage());

    const handlePage = (event, page) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_page', page)
        history.push(`${history.location.pathname}?${search.toString()}`)
        setPage(page)
        getProducts(history)
    }

    useEffect(() => {
        getProducts(history)
    }, [])
    
    return (
        <div className='products'>
            <img style={{width : '1300px'}} src={ProductsImage} alt='chigo' />
            <Sidebar />
            {productsData.map(item => (
                <ProductsCard key={item.id} item={item} />
            ))}
            <div className={classes.root}>
            <Pagination
            page={+page}
            onChange={(event, page) => {handlePage(event, page)}} 
            count={paginationPages}
            count={10} 
            variant="outlined" 
            color="secondary" />
            </div>
        </div>
    );
};

export default ProductsList;