import React from "react";

function IndianPlayers() {

    const players = [
        "Virat",
        "Rohit",
        "Gill",
        "Rahul",
        "Pant",
        "Hardik"
    ];

    const [p1, , p3, , p5] = players;
    const [, p2, , p4, , p6] = players;

    const T20players = [
        "Virat",
        "Rohit",
        "Gill"
    ];

    const RanjiPlayers = [
        "Pujara",
        "Rahane",
        "Iyer"
    ];

    const mergedPlayers = [...T20players, ...RanjiPlayers];

    return (

        <div>

            <h2>Odd Team Players</h2>

            <p>{p1}</p>
            <p>{p3}</p>
            <p>{p5}</p>

            <h2>Even Team Players</h2>

            <p>{p2}</p>
            <p>{p4}</p>
            <p>{p6}</p>

            <h2>Merged Players</h2>

            {mergedPlayers.map((player, index) => (
                <p key={index}>{player}</p>
            ))}

        </div>

    );

}

export default IndianPlayers;