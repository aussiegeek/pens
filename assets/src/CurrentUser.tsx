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

const CurrentUser = () => (
  <ViewerQuery query={QUERY}>
    {({ loading, error, data }) => {
      if (loading || !data) return null;
      if (error) return <div>Error :(</div>;

      if (!data.viewer) {
        return <h1>Not logged in</h1>;
      }
      return <span>{data.viewer.name}</span>;
    }}
  </ViewerQuery>
);

export { CurrentUser };
