import styles from "../CohortDetails.module.css";

function CohortDetails(props) {

    return (

        <div className={styles.box}>

            <h3
                style={{
                    color:
                        props.status === "ongoing"
                            ? "green"
                            : "blue"
                }}
            >
                {props.name}
            </h3>

            <dl>

                <dt>Coach</dt>
                <dd>{props.coach}</dd>

                <dt>Trainer</dt>
                <dd>{props.trainer}</dd>

                <dt>Status</dt>
                <dd>{props.status}</dd>

            </dl>

        </div>

    );

}

export default CohortDetails;