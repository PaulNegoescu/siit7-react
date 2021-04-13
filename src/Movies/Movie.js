import styles from './Movies.module.css';

export function Movie({ data }) {
  return (
    <article className={styles.movie}>
      <a href="http://google.com">
        <img src={data.Poster} alt="Poster" />
        <h2>{data.Title}</h2>
      </a>
    </article>
  );
}
