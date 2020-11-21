import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Spin} from 'antd'
import {Suspense} from 'react'
import Main from './layout/Index'
const App = ()=>{
  return (
      <Suspense fallback={<Spin />}>
        <Router>
          <Switch>
            <Route path="/" component={Main}></Route>
          </Switch>
        </Router>
      </Suspense>
  )  
}

export default App

