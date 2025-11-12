import { memo } from "react";
import { createTraining } from "../models/training";

const training = createTraining();

function Training() {
    return <div>
        <h2>{training.description}</h2>
        <p>{training.date.toLocaleDateString()}</p>
        {
            training.exercises.map(exercise => {
                return (
                <div className="card" key={exercise.name}>
                    <p>
                        <strong>{exercise.name}:&nbsp;</strong>
                        {exercise.sets}x{exercise.reps}x{exercise.weight}kg
                    </p>
                </div>
                )
            })
        }
    </div>
}

export default memo(Training)