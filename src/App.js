import Counter from './Counter/Counter';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './Movies/MovieDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from './shared/Nav/Nav';
import { Auth } from './Auth/Auth';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/" component={() => <h1>Homepage</h1>} />
          <Route path="/login" component={Auth} />
          <Route path="/register" component={Auth} />
          <Route path="/counter">
            <Counter />
          </Route>
          <Route exact path="/movies" component={Movies} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="*" component={() => <h1>404</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
