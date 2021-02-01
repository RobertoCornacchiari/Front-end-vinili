import React, { useEffect, useState } from "react"
import styled from 'styled-components'
const scripts = require("./scripts")

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


export function VinylsList() {
    const [vinyls, setVinyls] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:3000/vinyls")
            .then(r => r.json())
            .then(body => setVinyls(body))
    }, [])

    const columns = React.useMemo(
        () => [
          {
            Header: 'Vinyls',
            columns: [
              {
                Header: 'Titolo',
                accessor: 'titolo',
              },
              {
                Header: 'Autore',
                accessor: 'autore',
              },
              {
                Header: 'Genere',
                accessor: 'genere',
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
    let vinili = scripts.formatJSON(vinyls);
    return (
        <>
            <Styles>
                <scripts.Table columns={columns} data={vinili} />
            </Styles>

        </>
    )
}

