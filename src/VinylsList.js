import React, { useEffect, useState } from "react"

export function VinylsList() {
    const [vinyls, setVinyls] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:3000/vinyls")
            .then(r => r.json())
            .then(body => setVinyls(body))
    }, [])

    return (
        <>
            <pre>
                {JSON.stringify(vinyls, null, 2)}
            </pre>
            {/*
            <table>
                <thead>
                <tr>
                    <th>Autore</th>
                    <th>Titolo</th>
                </tr>
                </thead>
                <tbody>
                {vinyls.map(function (v) {
                    return (
                        <tr key={v.id}>
                            <td>{v.autore}</td>
                            <td>{v.titolo}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            */}
        </>
    )
}