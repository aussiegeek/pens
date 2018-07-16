import * as React from "react";
import { CurrentUser } from './CurrentUser'
import { Pens } from './Pens'

export const App: React.SFC<{}> = (props) => {
  return (
    <div>
      <h1>Pens</h1>
      <CurrentUser />
      <Pens />
    </div>
  )
}
