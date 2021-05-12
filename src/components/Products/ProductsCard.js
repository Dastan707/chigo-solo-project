import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { productsContext } from '../../contexts/ProductsContext';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import IconButton from "@material-ui/core/IconButton";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: '100%',
    
  },
  title: {
    textAlign: 'center'
  },
  media: {
    height: '300px',
  },
  link: {
    color: 'black'
  },
  icons: {
    display: 'flex',
    justifyContent: 'center'
  }
});

const ProductsCard = ({ item }) => {
  const classes = useStyles();

  const { deleteProduct, editProduct, addProductToFavo, checkProductInFavo } = useContext(productsContext);

return (
  <Card className={classes.root}>
    <Link className={classes.link} to={`/details/${item.id}`} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.image}
          title="Chigo"
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description.slice(0, 100)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions  className={classes.icons}>
        <Link to='/edit'>
        <Button onClick={() => editProduct(item.id)} size="small" color="primary">
        <EditIcon fontSize='medium' />
        </Button>
        </Link>
        <Button onClick={() => deleteProduct(item.id)} size="small" color="primary">
        <DeleteIcon  fontSize='medium' />
        </Button>
        {/* <Button  onClick={() => addProductToFavo(item)}  size="small" color="primary">
        <BookmarkIcon  fontSize='medium' color={checkProductInFavo(item.id)? 'secondary' : 'primary'} />
        </Button> */}
        <IconButton
                    onClick={() => addProductToFavo(item)}
                    color={checkProductInFavo(item.id)? 'secondary' : 'primary'}
                    aria-label="share">
                    <BookmarkIcon />
                </IconButton>
      </CardActions>
    </Card>
)
};

export default ProductsCard;