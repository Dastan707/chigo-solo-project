import React, { useContext, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from "@material-ui/core";
import { productsContext } from '../../contexts/ProductsContext';
import { useHistory } from 'react-router';
import HomeIcon from '@material-ui/icons/Home';
import StarsIcon from '@material-ui/icons/Stars';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import './Sidebar.css'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  radio: {
    display: 'inline',
  },

}));

const Sidebar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();

  const classes = useStyles();

  const { getProducts } = useContext(productsContext)
  const [memory, setMemory] = useState(getMemory());

  function getMemory() {
    const search = new URLSearchParams(history.location.search);
    return search.get('category');
  }

  const handleChangeMemory = (e) => {
    if (e.target.value === "All") {
      history.push(`${history.location.pathname.replace("category")}`);
      getProducts(history);
      return;
    }

    const search = new URLSearchParams(history.location.search);
    search.set("category", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(history);
    setMemory(e.target.value)
  };
  return (
    <div className='navbar-products'>
      <div className='navbar-links'>
        <MenuList>
          <Link to='/' >
            <MenuItem>
              <ListItemIcon>
                <HomeIcon color="action" fontSize='medium' />
              </ListItemIcon>
              <Typography variant="inherit">Home</Typography>
            </MenuItem>
          </Link>
        </ MenuList >
      </div>
      <div className="radio__group">
        <RadioGroup className={classes.radio} aria-label="memory" name="memory1" value={memory} onChange={handleChangeMemory}>
          <FormControlLabel value="Wall Split Type" control={<Radio />} label="Wall Split Type" />
          <FormControlLabel value="Floor Standing Type" control={<Radio />} label="Floor Standing Type" />
          <FormControlLabel value="Portable" control={<Radio />} label="Portable" />
          <FormControlLabel value="All" control={<Radio />} label="All" />
        </RadioGroup>
      </div>
      <div className={classes.nav}>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Open Menu
      </Button>
        <Menu
          className={classes.menu}
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to='/products/favorites' >
            <MenuItem>
              <ListItemIcon>
                <StarsIcon color="action" fontSize='medium' />
              </ListItemIcon>
              <Typography variant="inherit">Favorites</Typography>
            </MenuItem>
          </Link>
          <Link to='/login'>
            <MenuItem>
              <ListItemIcon>
                <AccountCircleSharpIcon color="action" fontSize='medium' />
              </ListItemIcon>
              <Typography variant="inherit">Login</Typography>
            </MenuItem>
          </Link>
          <Link to='/add'>
            <MenuItem>
              <ListItemIcon>
                <AddCircleOutlineSharpIcon color="action" fontSize='medium' />
              </ListItemIcon>
              <Typography variant="inherit">Add New Product</Typography>
            </MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
}

export default Sidebar;