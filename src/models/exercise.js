/**
 * @typedef {object} Exercise
 * @property {string} name
 * @property {number} sets
 * @property {number} reps
 * @property {number} weight
 * @property {boolean} isDone
 */

/**
 * @param {string} name 
 * @param {number} sets
 * @param {number} reps
 * @param {number} weight
 * @returns {Exercise}
 */
export function createExercise(name, sets, reps, weight) {
    return {
        name,
        sets,
        reps,
        weight,
        isDone: false
    }
}

/**
 * @param {Exercise} exercise 
 * @returns {Exercise}
 */
export function toggleDone(exercise) {
    return {...exercise, isDone: true}
}

/**
 * @param {Exercise} exercise
 * @returns {Array<number>} 
 */
export function generateExerciseSets(exercise) {
    const sets = []
    let i = 0
    
    while(i < exercise.sets) {
        sets.push(0)
        i++
    }

    return sets;
}