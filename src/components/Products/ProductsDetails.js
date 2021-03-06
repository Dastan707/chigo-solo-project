import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { productsContext } from '../../contexts/ProductsContext';
import './ProductsDetails.css'
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import CommentsList from './CommentsList';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const ProductsDetails = ({ props }) => {
    const classes = useStyles();
    // console.log(props);
    const { id } = useParams()
    const [inpDesc, setInpDesc] = useState('')
    const { productsDetails, getProductsDetails, addComment, comments, deleteComment } = useContext(productsContext);

    function handleClick() {
        let newComment = {
            description: inpDesc,
            id: Date.now()
        }
        setInpDesc('')
        addComment(newComment)
        // console.log(newComment)
    }

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
                    <h2 id='h3' className='desc-list'>{productsDetails.category}</h2>
                    <h1 id='h1' className='desc-list'>{productsDetails.title}</h1>
                    <h4 className='desc-list'>{productsDetails.description}</h4>
                    <h3 className='desc-list'>{productsDetails.price}</h3>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color="primary" className={classes.margin}>
                            To Order
                    </Button>
                    </ThemeProvider>
                </div>
            </div>
            <div className='comments'>
                <input className='inp-comm' onChange={(e) => setInpDesc(e.target.value)} value={inpDesc} type='text' placeholder='Leave your comment... ' />
                <button className='btn-comm' onClick={handleClick}>Send</button>
                <div className='all-comments'>
                    <CommentsList />
                </div>
            </div>
            <img style={{ width: '100%' }} src='http://www.chigogroup.com/upload/ueditor/20200607/202006071820429957.jpg' />
        </>
    );
};

export default ProductsDetails;