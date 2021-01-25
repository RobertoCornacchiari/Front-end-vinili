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
            <h3>Elenco Vinili</h3>
            <pre>
                {JSON.stringify(vinyls, null, 2)}
            </pre>
        </>
    )
}