import React from 'react'
import Farm from '@/page/farm'
import Login from '@/page/login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App: React.FC<unknown> = () => {
  return (
    <div className='App'>
      <Router>
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
      </Router>
    </div>
  )
}

export default App
