export function createExercise(name='Stub exercise', sets=0, reps=0, weight=0) {
    return {
        name,
        sets,
        reps,
        weight,
        isDone: false
    }
}

export function toggleDone(exercise) {
    return {...exercise, isDone: true}
}

export function generateExerciseSets(exercise) {
    const sets = []
    let i = 0
    
    while(i < exercise.sets) {
        sets.push(0)
        i++
    }

    return sets;
}