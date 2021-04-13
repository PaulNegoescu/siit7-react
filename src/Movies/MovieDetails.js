import { useParams } from 'react-router';

export function MovieDetails() {
  const { id } = useParams();

  return <h1>Titlul filmului</h1>;
}
