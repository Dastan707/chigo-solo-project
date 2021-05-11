import React, { useContext, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from "@material-ui/core";
import { productsContext } from '../../contexts/ProductsContext';
import { useHistory } from 'react-router';


const useStyles = makeStyles((theme) => ({
  radio: {
    display: 'inline',
  }
  }));

const Sidebar = () => {
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
    <div className='radio-group' style={{textAlign: 'center', marginBottom: '50px', backgroundColor: '#f2f2f2'}}>
        <RadioGroup className={classes.radio} aria-label="memory" name="memory1" value={memory} onChange={handleChangeMemory}>
        <FormControlLabel value="Wall Split Type" control={<Radio />} label="Wall Split Type" />
            <FormControlLabel value="Floor Standing Type" control={<Radio />} label="Floor Standing Type" />
            <FormControlLabel value="Portable" control={<Radio />} label="Portable" />
            <FormControlLabel value="All" control={<Radio />} label="All" />
      </RadioGroup>
    </div>
  );
}

export default Sidebar;