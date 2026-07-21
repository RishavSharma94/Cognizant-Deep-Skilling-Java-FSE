import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {

    return (

        <div>

            <CalculateScore
                Name="Rishav Sharma"
                School="GLA University"
                Total={450}
                goal={5}
            />

        </div>

    );

}

export default App;