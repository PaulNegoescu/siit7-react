import { useEffect, useState } from 'react';
import { Movie } from './Movie';

import styles from './Movies.module.css';

export function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const { results } = await fetch(
        'https://movies-app-siit.herokuapp.com/movies'
      ).then((res) => res.json());

      setMovies(results);
    }
    fetchMovies();
  }, []);

  if (movies.length === 0) {
    return null;
  }

  return (
    <section className={styles['movie-list']}>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <Movie key={movie._id} data={movie} />
      ))}
    </section>
  );
}
