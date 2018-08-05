import * as React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { CurrentUser } from "./CurrentUser";
import { Pens } from "./Pens";
import { Brand } from "./Brand";
import { CreateBrand } from "./CreateBrand";

const NoMatch: React.SFC<{}> = props => {
  return <h1>not found</h1>;
};

export const App: React.SFC<{}> = props => {
  return (
    <Router>
      <div>
        <div>
          <CurrentUser />
          <Link to="/">
            <h1>Pens</h1>
          </Link>
        </div>

        <div>
          <Link to="/brands/new">New Brand</Link>
        </div>

        <Switch>
          <Route path="/brands/new" component={CreateBrand} />
          <Route path="/brands/:id" component={Brand} />
          <Route exact={true} path="/" component={Pens} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};
