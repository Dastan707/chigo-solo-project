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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: '100%',
  },
  media: {
    height: 100,
  },
  link: {
    color: 'black'
  }
});

const ProductsCard = ({ item }) => {
  const classes = useStyles();

  const { deleteProduct, editProduct } = useContext(productsContext);

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
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
        <Link to='/edit'>
        <Button onClick={() => editProduct(item.id)} size="small" color="primary">
          Edit
        </Button>
        </Link>
        <Button onClick={() => deleteProduct(item.id)} size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
)
};

export default ProductsCard;