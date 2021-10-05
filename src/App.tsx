import React, { useState } from 'react'
import TestApi from '@/api/test'
const App: React.FC<unknown> = () => {
  const [count, setCount] = useState(0)
  const handleClick = async () => {
    const res = await TestApi.getTestData(count)

    console.log(res.code)

    const a = 'ss'
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <button type='button' onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p onClick={handleClick}>
          Learn React
          {' | '}
          Vite Docs
        </p>
      </header>
    </div>
  )
}

export default App
