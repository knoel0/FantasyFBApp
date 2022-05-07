import React from 'react'

export default function Player( {id, name, number, team, qb, rb, wr, te, k, d_ST }) {

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{number}</td>
            <td>{team}</td>
            <td>{qb}</td>
            <td>{rb}</td>
            <td>{wr}</td>
            <td>{te}</td>
            <td>{k}</td>
            <td>{d_ST}</td>
        </tr>
    )
}