import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DatePicker } from '@material-ui/pickers';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesAction } from '../../redux/actions/countryActions';

const useStyles = makeStyles({
  card: {
    marginTop: '30px'
  },
  form: {
    color: 'red',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    marginBottom: '50px',
  },
  inputDate: {
    width: '48%',
    marginBottom: '50px',
  },
  row:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  submitButton:{
    backgroundColor: '#593b8b',
    color: 'white'
  },
  avatar: {
    backgroundColor: '#593b8b',
  },
});

export const FormNewAuthor = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState();
  const [dateOfDead, setDateOfDead] = useState();

  const handleDateBirth = (date) => {
    setDateOfBirth(date);
  }
  const handleDateDead = (date) => {
    setDateOfDead(date);
  }

  const handleChange = (event) => {
    setCountry(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const inputHandler = (value) => {
    setName(value);
  };

  const createAuthorHandler = (e) =>{
    e.preventDefault();
    console.log(dateOfBirth)
  }
  useEffect(() => {
    dispatch(getCountriesAction);
  }, []);

  return (
    <div>
      <Container maxWidth="md" fixed>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                A
              </Avatar>
            }
            title="Crear un nuevo autor"
            subheader="Complete todos los campos"
          ></CardHeader>
          <CardContent>
            <Grid spacing={3}>
              <form className={classes.form} noValidate autoComplete="off">
                <Grid item xs={12}>
                  <TextField
                    className={classes.input}
                    id="standard-basic"
                    label="Nombre"
                    value={name}
                    onChange={(e) => inputHandler(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Pais de nacimiento
                  </InputLabel>
                  <Select
                    className={classes.input}
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    value={country}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    onChange={handleChange}
                  >
                    <MenuItem disabled value="">
                      <em></em>
                    </MenuItem>
                    {countries.loading === true ? (
                      <MenuItem disabled>Cargando paises...</MenuItem>
                    ) : (
                      countries.list.map((c) => (
                        <MenuItem key={c.alpha2Code} value={c.alpha2Code}>
                          {c.name}
                        </MenuItem>
                      ))
                    )}
                  </Select>
                </Grid>
                <Grid className={classes.row} item xs={12}>
                  <DatePicker
                    className={classes.inputDate}
                    format="DD/MM/yyyy"
                    variant="inline"
                    label="Fecha de nacimiento"
                    views={["year", "month", "date"]}
                    value={dateOfBirth}
                    onChange={handleDateBirth}
                  />
                  <DatePicker
                    className={classes.inputDate}
                    format="DD/MM/yyyy"
                    variant="inline"
                    label="Fecha de defunsion"
                    views={["year", "month", "date"]}
                    value={dateOfDead}
                    onChange={handleDateDead}
                  />
                </Grid>
                <Button className={classes.submitButton} onClick={createAuthorHandler} type="submit" >Enviar</Button>
              </form>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};