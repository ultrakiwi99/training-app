import { createExercise } from "./exercise";

export function createTraining() {
    return {
        date: new Date(),
        description: 'Basic fullbody training',
        exercises: [
            createExercise('Chest press', 5 ,5, 50),
            createExercise('Leg press', 5 ,5, 50),
            createExercise('Lat pull', 5, 5, 50),
            createExercise('Biceps curls', 5, 5, 10),
        ]
    }
}

