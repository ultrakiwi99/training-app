import { useState } from 'react'
import { createExercise, generateExerciseSets } from './models/exercise'
import './App.css'

const initial = createExercise('Chest press', 5 ,5, 50);

function App() {
  const [exercise] = useState(initial)
  const [sets, setSets] = useState(generateExerciseSets(exercise))
  /**
   * @param {number} index 
   * @returns 
   */
  const handleUpdateSet = (index) => () => {
    const newSets = [...sets]

    if (newSets[index] < exercise.reps) {
      newSets[index]++
    } else {
      newSets[index] = 0
    }

    setSets(newSets)
  } 

  return (
    <>
      <h1>Exercise</h1>
      <div className="card">
        <p><strong>{exercise.name}:&nbsp;</strong>{exercise.sets}x{exercise.reps}x{exercise.weight}kg</p>
      </div>
      <div className='set'>
        {sets.map((set, index) => (
          <button key={index} 
            onClick={handleUpdateSet(index)} 
            className='set__button'>{set}</button>
        ))}
      </div>
    </>
  )
}

export default App
