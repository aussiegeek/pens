import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import { CurrentUser } from './CurrentUser'
import { Pens } from './Pens'
import { Brand } from './Brand'

const NoMatch: React.SFC<{}> = props => {
  return (
    <h1>not found</h1>
  )
}

export const App: React.SFC<{}> = (props) => {
  return (
    <Router>
      <div>
        <CurrentUser />
        <Link to="/"><h1>Pens</h1></Link>

        <Switch>
          <Route path="/brands/:id" component={Brand} />
          <Route exact path="/" component={Pens} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}
