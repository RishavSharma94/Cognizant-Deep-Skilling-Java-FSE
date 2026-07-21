import CohortDetails from "./Components/CohortDetails";

function App() {

    return (

        <div>

            <CohortDetails
                name="React Batch"
                coach="John"
                trainer="David"
                status="ongoing"
            />

            <CohortDetails
                name="Java Batch"
                coach="Alex"
                trainer="Robert"
                status="completed"
            />

        </div>

    );

}

export default App;