import React, { useEffect, useState } from 'react';

export default function Players() {

    const [state, setState] = useState(null)
    
    const getPlayers = () =>
        fetch("https://localhost:5001/Players")
            .then((res) => res.json())

    useEffect(() => {
        getPlayers().then((data) => setState(data))
    })        

    return (
        <>
            <h1>Players:</h1>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Team</th>
                        <th>QB</th>
                        <th>RB</th>
                        <th>WR</th>
                        <th>TE</th>
                        <th>K</th>
                        <th>DST</th>
                    </tr>
                    {state?.map((item) =>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.number}</td>
                        <td>{item.team}</td>
                        <td>{item.qb}</td>
                        <td>{item.rb}</td>
                        <td>{item.wr}</td>
                        <td>{item.te}</td>
                        <td>{item.k}</td>
                        <td>{item.d_st}</td>
                    </tr>
                    )}
                </table>
            </div>
        </>
    );
}