import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(0)
  const addNum = () => {
    setNum(num + 1)
  }
  const subNum = () => {
    if (num === 0) {
      console.log('nhi ho sakta');
    } else {
      setNum(num - 1)

    }
  }

  return (
    <>
      <p className='text'>{num}</p>
      <div className='btn-div'>
      <button className='btn' onClick={addNum}>+</button>
      <button className='btn' onClick={subNum}>-</button>
      </div>

    </>
  )
}

export default App
