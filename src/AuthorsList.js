import React, { useEffect, useState } from "react";

export function AuthorsList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/authors")
      .then((r) => r.json())
      .then((body) => setAuthors(body));
  });

  return (
    <div>
      <pre>{JSON.stringify(authors, null, 2)}</pre>
    </div>
  );
}