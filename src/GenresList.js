import React, { useEffect, useState } from "react";
import styled from 'styled-components'

const scripts = require("./scripts");

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

export function GenresList() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/genres")
      .then((r) => r.json())
      .then((body) => setGenres(body));
  });

  const columns = React.useMemo(
    () => [
      {
        Header: 'Genres',
        columns: [
          {
            Header: 'Nome',
            accessor: 'nome',
          },
          {
            Header: 'ID',
            accessor: 'id',
          },
        ],
      },
    ],
    []
  )

  return (
    <Styles>
      <scripts.Table columns={columns} data={genres} />
    </Styles>
  );
}