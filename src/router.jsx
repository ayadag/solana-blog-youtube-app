import { FC } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { FullPost } from "./pages/fullpost.jsx"
// import { Dashboard } from "src/pages/dashboard"
import { Dashboard } from "./pages/dashboard.jsx"

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/read-post/:id" >
          <FullPost />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
