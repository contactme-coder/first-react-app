import { useState } from "react";

function FavoriteMovies() {
  let movieList = [
    { id: 1, nom: "Inception" },
    { id: 2, nom: "Interstellar" },
    { id: 3, nom: "The Dark Knight" },
  ];

  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState(movieList);

  function addMovie(event) {
    event.preventDefault();
    if (movieName === "") {
      return;
    }
    let idM = movies.length + 1;
    let movie = { id: idM, nom: movieName };
    setMovies((movies) => [...movies, movie]);
    setMovieName("");
  }

  function deleteMovie(id) {
    setMovies((movies) => movies.filter((m) => m.id !== id));
  }

  return (
    <div>
      <h2>Exercice 5</h2>
      <form onSubmit={(e) => addMovie(e)}>
        <div>
          <label htmlFor="">Film</label>
          <input
            type="text"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>

      {movies.length === 0 && <p>Votre liste de favoris est vide</p>}

      {movies.map((movie) => (
        <div key={movie.id}>
          <span>{movie.nom}</span>
          <button onClick={() => deleteMovie(movie.id)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
}

export default FavoriteMovies;