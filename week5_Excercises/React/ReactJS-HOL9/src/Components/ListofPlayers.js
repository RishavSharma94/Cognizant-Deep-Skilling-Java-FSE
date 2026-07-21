import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat", score: 90 },
        { name: "Rohit", score: 45 },
        { name: "Gill", score: 80 },
        { name: "Rahul", score: 65 },
        { name: "Pant", score: 72 },
        { name: "Hardik", score: 60 },
        { name: "Jadeja", score: 88 },
        { name: "Ashwin", score: 55 },
        { name: "Shami", score: 74 },
        { name: "Bumrah", score: 95 },
        { name: "Siraj", score: 68 }
    ];

    const lowScore = players.filter(player => player.score < 70);

    return (

        <div>

            <h2>List of Players</h2>

            {players.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}

            <h2>Players with Score Below 70</h2>

            {lowScore.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}

        </div>

    );

}

export default ListofPlayers;