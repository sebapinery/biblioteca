import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { SearchInput } from './Components/SearchInput';
import { FormNewAuthor } from './Components/FormNewAuthor';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SearchInput} />
          <Route path="/newauthor" component={FormNewAuthor} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
