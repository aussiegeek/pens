import * as React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { GetBrandQuery, GetBrandQueryVariables } from "../graphql";

const QUERY = gql`
  query GetBrandQuery($brand_id: ID!) {
    getBrand(id: $brand_id) {
      id
      name
      pens {
        id
        model
      }
    }
  }
`;

interface BrandProps {
  match: {
    params: {
      id: string;
    };
  };
}

class BrandQuery extends Query<GetBrandQuery, GetBrandQueryVariables> {}

export const Brand: React.SFC<BrandProps> = props => {
  return (
    <BrandQuery query={QUERY} variables={{ brand_id: props.match.params.id }}>
      {({ loading, error, data }) => {
        if (loading || !data) return null;
        if (!data.getBrand) return <div>not found</div>;
        if (error) return <div>Error</div>;

        return (
          <div>
            <h1>{data.getBrand.name}</h1>
            {data.getBrand.pens.map(pen => {
              return <div key={pen.id}>{pen.model}</div>;
            })}
          </div>
        );
      }}
    </BrandQuery>
  );
};
