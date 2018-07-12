import * as React from "react";
import * as ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { App } from "./App";

const el = document.createElement("div");
document.body.appendChild(el);

const client = new ApolloClient({ uri: "/graphql" });

const ApolloApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp, el);
