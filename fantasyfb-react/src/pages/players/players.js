import React, { useEffect, useState } from 'react';
import './players.css';

export default function Players() {

    const [players, setPlayers] = useState([])
    const [selectedPlayer, setSelectedPlayer] = useState() //Player ID

    useEffect(() => {
        getPlayers()
            .then((data) => setPlayers(data))
        //setSelectedPlayer(players[0])    
    }, [])

    useEffect(() => {
        console.log(selectedPlayer);
    }, [selectedPlayer])

    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        var clickHandler = function(row) {
            return function() {
                selectPlayer(row)
            }
        }
        rows[i].onclick = clickHandler(rows[i]);
    }
    
    const getPlayers = () =>
        fetch("https://localhost:5001/Players")
            .then((res) => res.json())

    function selectPlayer(row) {
        var cell = row.getElementsByTagName('td')[0];
        var id = cell.innerHTML;
        setSelectedPlayer(parseInt(id));
    }

    return (
        <>
        <h1>Players:</h1>
        <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
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
                </thead>
                <tbody>
                {players?.map((player) =>
                <tr key={player.id}>
                    <td>{player.id}</td>
                    <td>{player.name}</td>
                    <td>{player.number}</td>
                    <td>{player.team}</td>
                    <td>{player.qb}</td>
                    <td>{player.rb}</td>
                    <td>{player.wr}</td>
                    <td>{player.te}</td>
                    <td>{player.k}</td>
                    <td>{player.d_st}</td>
                </tr>
                )}
                </tbody>
                
            </table>
        </div>
        </>
    );
}