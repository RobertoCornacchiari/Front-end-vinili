import React, { useState, useEffect } from "react"

const scripts = require("./scripts");


export function VinylDetails(props) {
    const { id } = props.match.params;
    const [vinyl, setVinyl] = useState({});

    useEffect(() => {
        fetch("http://127.0.0.1:3000/vinyls/" + id)
            .then(r => r.json())
            .then(body => setVinyl(body))
    }, [])

    
    return (
        <>
            <h2>Dettagli per il vinile {id}</h2>
            <pre>
                {JSON.stringify(vinyl, null, 2)}
            </pre>
        </>
    )
}