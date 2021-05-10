import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes';
import '../MovieList/MovieList.module.css';

const MovieList = ({ movies, location }) => (
  <ul className="movieList">
    {movies.length > 0
      ? movies.map(({ id, name, title }) => (
          <li key={id} className="movieList-item ">
            <NavLink
              className="movieList-link"
              to={{
                pathname: `${routes.movies}/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              {title !== undefined ? title : name}
            </NavLink>
          </li>
        ))
      : 'There is nothing here, look for a movie or specify your request'}
  </ul>
);

export default withRouter(MovieList);
