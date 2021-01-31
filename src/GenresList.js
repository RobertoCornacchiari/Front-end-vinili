import React, { useEffect, useState } from "react";

export function GenresList() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/genres")
      .then((r) => r.json())
      .then((body) => setGenres(body));
  });

  return (
    <div>
      <pre>{JSON.stringify(genres, null, 2)}</pre>
    </div>
  );
}