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
// import { alpha } from '@material-ui/core/styles'
import { DatePicker } from '@material-ui/pickers';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesAction } from '../../redux/actions/countryActions';
// import axios from 'axios';
// import CustomizedSnackbars from '../../utils/alert'
import {
  createNewAuthor,
  getAllAuthors,
} from '../../redux/actions/authorsActions';
import { setAlert } from '../../redux/actions/alertActions';
import CustomizedSnackbars from '../../utils/alert';
// import moment from 'moment';

const useStyles = makeStyles({
  card: {
    marginTop: '30px',
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
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  submitButton: {
    backgroundColor: '#593b8b',
    color: 'white',
  },
  avatar: {
    backgroundColor: '#593b8b',
  },
});

export const FormNewBook = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors);

  const [open, setOpen] = useState(false); // SELECTOR TOGGLE STATE
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  // const [alarm, setAlarm] = useState();

  const handleAuthorSelectorChange = (author) => {
    setAuthor(author);
  };

  const handleAuthorSelectorToggle = () => {
    setOpen(!open);
  };

  const inputNameHandler = (value) => {
    setBookName(value);
  };

  const createAuthorHandler = (e) => {
    e.preventDefault();
    // DISPATCH CREATE NEW BOOOK
    console.log(e)
    // dispatch(setAlert(true, "success", "El libro fue cargado correctamente"))
  };



  useEffect(() => {
    dispatch(getAllAuthors());
  }, []);

  return (
    <div>
      {/* <CustomizedSnackbars toggle={true} /> */}
      <Container maxWidth="md" fixed>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                L
              </Avatar>
            }
            title="Crear un nuevo libro"
            subheader="Complete todos los campos"
          ></CardHeader>
          <CardContent>
            <Grid spacing={3}>
              <form className={classes.form} noValidate autoComplete="off">
                <Grid item xs={12}>
                  <TextField
                    className={classes.input}
                    id="standard-basic"
                    label="Nombre del libro"
                    value={bookName}
                    onChange={(e) => inputNameHandler(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Autor
                  </InputLabel>
                  <Select
                    className={classes.input}
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    value={author}
                    onClose={handleAuthorSelectorToggle}
                    onOpen={handleAuthorSelectorToggle}
                    onChange={(e) => handleAuthorSelectorChange(e.target.value)}
                  >
                    {authors.loading === true ? (
                      <MenuItem disabled>Cargando autores...</MenuItem>
                    ) : (
                      authors.allAuthors.map((author) => (
                        <MenuItem key={author.id} value={author.id}>
                          {author.name}
                        </MenuItem>
                      ))
                    )}
                  </Select>
                </Grid>
                {/* <Grid className={classes.row} item xs={12}>
                  
                </Grid> */}
                <Button
                  className={classes.submitButton}
                  onClick={createAuthorHandler}
                  type="submit"
                >
                  Enviar
                </Button>
              </form>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
