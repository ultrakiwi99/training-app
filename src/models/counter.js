/**
 * @typedef {object} Counter
 * @property {number} value
 */

/** 
 * @returns {Counter}
 */
export function createCounter() {
    return {value: 0}
}

/**
 * @param {Counter} counter 
 * @returns {Counter}
 */
export function increase(counter) {
    return {...counter, value: counter.value + 1}
}

/**
 * @param {Counter} counter 
 * @returns {Counter}
 */
export function decrease(counter) {
    return {...counter, value: counter.value - 1}
}

/**
 * @param {Counter} counter 
 * @returns {Counter}
 */
export function reset(counter) {
    return {...counter, value: 0}
}