import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import menus from './menu'

const redirectMenus = menus.filter(item => item.redirect)
function RedirectRouter() {
  return (
    <Switch>
      {
        redirectMenus.map(item => {
           return <Redirect key={ item.path } exact path={ item.path } to={ item.redirect } />
        })
      }
    </Switch>
  )
}

export default RedirectRouter
