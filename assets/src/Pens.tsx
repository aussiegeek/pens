import * as React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { GetPensQuery } from "../graphql";

const QUERY = gql`
  query GetPensQuery {
    pens {
      id
      brand {
        id
        name
      }
      model
    }
  }
`;

class PensQuery extends Query<GetPensQuery> {}

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
                <Link to={`/brands/${pen.brand.id}`}>{pen.brand.name}</Link>{" "}
                {pen.model}
              </div>
            );
          })}
        </div>
      );
    }}
  </PensQuery>
);

export { Pens };
