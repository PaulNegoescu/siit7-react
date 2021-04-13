import Counter from './Counter/Counter';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './Movies/MovieDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from './shared/Nav/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={() => <h1>Homepage</h1>} />
        <Route path="/counter">
          <Counter />
        </Route>
        <Route exact path="/movies" component={Movies} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="*" component={() => <h1>404</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
