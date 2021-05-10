import { Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AppBar from './components/AppBar';
import './styles.css';
import routes from './routes';

const HomeView = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MovieView = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movie-page" */),
);
const MovieDetailsView = lazy(
  () =>
    import('./views/MovieDetails') /* webpackChunkName: "movie-details-page" */,
);
const NotFoundPage = lazy(() =>
  import('./views/NotFoundPage' /* webpackChunkName: "not-found-page */),
);

const App = () => (
  <>
    <AppBar />
    <div className="container">
      <Suspense fallback={<h1>Loading...Please wait...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route path={routes.movieDetails} component={MovieDetailsView} />
          <Route path={routes.movies} component={MovieView} />
          <Route exact path="/goit-react-hw-04-movies" component={HomeView} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  </>
);

export default App;
