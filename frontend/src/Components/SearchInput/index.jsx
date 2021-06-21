import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, InputAdornment,InputLabel, OutlinedInput } from '@material-ui/core';

const useStyles = makeStyles({
    inputSeachDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
    },
    inputSearch:{
        width: '100%',
        padding: '.5em 1em',
        margin: '5px'
    }
});

export const SearchInput = () => {
  const [searchInput, setsearchInput] = useState('');

  const classes =useStyles();

  const handleChange = (searchInput) => {
    setsearchInput(searchInput);
    console.log(searchInput);
  };

  return (
    <div className={classes.inputSeachDiv}>
      <Container fixed>
      {/* <InputLabel htmlFor="outlined-adornment-amount">Buscar</InputLabel> */}
      <OutlinedInput
      className={classes.inputSearch}
        id="outlined-adornment-amount"
        value={searchInput}
        onChange={({ target }) => handleChange(target.value)}
        startAdornment={<InputAdornment position="start">🔎</InputAdornment>}
        labelWidth={60}
      />
      </Container>
    </div>
  );
};
