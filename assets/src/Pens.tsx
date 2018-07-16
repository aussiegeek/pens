import * as React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { GetPensQuery } from "../graphql";

const QUERY = gql`
  query GetPensQuery {
    pens {
      id
      brand {
        name
      }
      model
    }
  }
`;

class PensQuery extends Query<GetPensQuery> { }

const Pens = () => (
  <PensQuery query={QUERY}>
    {({ loading, error, data }) => {
      if (loading || !data) return null;
      if (error) return <div>Error :(</div>;

      return (
        <div>
          {data.pens.map(pen => {
            return (
              <div key={pen.id}>
                {pen.brand.name} {pen.model}
              </div>
            )
          })}
        </div>
      )
    }}
  </PensQuery>
);

export { Pens };
