import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { SearchInput } from './Components/SearchInput';
import { FormNewAuthor } from './Components/FormNewAuthor';
import { FormNewBook } from './Components/FormNewBook';
import AlertCustom from './utils/alert';

function App() {
  return (
    <>
      <AlertCustom />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SearchInput} />
          <Route path="/newauthor" component={FormNewAuthor} />
          <Route path="/newbook" component={FormNewBook} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
