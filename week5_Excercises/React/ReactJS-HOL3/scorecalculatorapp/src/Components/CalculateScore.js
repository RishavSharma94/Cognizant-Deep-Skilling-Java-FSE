import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {

    const average = props.Total / props.goal;

    return (
        <div className="box">
            <h2>Student Details</h2>

            <p><b>Name :</b> {props.Name}</p>

            <p><b>School :</b> {props.School}</p>

            <p><b>Total Marks :</b> {props.Total}</p>

            <p><b>Goal :</b> {props.goal}</p>

            <h3>Average Score : {average}</h3>
        </div>
    );
}

export default CalculateScore;