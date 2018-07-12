import * as React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { GetViewerQuery } from "../graphql";

const QUERY = gql`
  query GetViewerQuery {
    viewer {
      name
    }
  }
`;

class ViewerQuery extends Query<GetViewerQuery> {}

const App = () => (
  <ViewerQuery query={QUERY}>
    {({ loading, error, data }) => {
      if (loading || !data) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      if (!data.viewer) {
        return <h1>Not logged in</h1>;
      }
      return <h1>Hello, {data.viewer.name}</h1>;
    }}
  </ViewerQuery>
);

export { App };
