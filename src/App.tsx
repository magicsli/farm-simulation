import React, { useState } from 'react'
import TestApi from '@/api/test'
import Farm from '@/page/farm'
import Login from '@/page/login'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App: React.FC<unknown> = () => {
  const [count, setCount] = useState(0)
  const handleClick = async () => {
    const res = await TestApi.getTestData(count)

    console.log(res.code)
  }

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <p>Hello Vite + React!</p>
          <p>
            <button type='button' onClick={() => setCount(count => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            <Link to='/'>farm</Link>
            <Link to='/login'>login</Link>
          </p>
          <Switch>
            <Route exact path='/'>
              <Farm />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </header>
      </Router>
    </div>
  )
}

export default App
