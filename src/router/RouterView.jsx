import React,{Suspense}from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'
import RedirectRouter from './RedirectRouter'
import { Spin } from 'antd'

import menu from './menu.js'
const RouterView = () => {
  let arr=[]
  const renderRouter= (menu)=>{
      menu.forEach(item => {
        if (item.children) {
          renderRouter(item.children)
        }  
        else {
            arr.push(<Route
              path={ item.path }
              key={item.path}
              exact
              component = { item.component } />)
        }
      })
    return arr
  }
   
  return (
    <Suspense fallback={<div className="spinpo"><Spin size="large" /></div>}>
        <Switch>
            <Redirect path="/" exact to="/home" />
            {
              renderRouter(menu)             
            },
            <RedirectRouter /> 
             
            
        </Switch> 
    </Suspense>
  )
}
export default RouterView
