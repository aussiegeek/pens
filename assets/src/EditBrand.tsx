import * as React from "react";
import { gql } from "apollo-boost";
import { RouterProps } from "react-router";
import { Query, Mutation, MutationFn } from "react-apollo";
import {
  GetBrandEditQuery,
  GetBrandEditQueryVariables,
  UpdateBrandMutation,
  UpdateBrandMutationVariables,
  UpdateBrandInput
} from "../graphql";
import { BrandForm, BrandParams } from "./BrandForm";

const QUERY = gql`
  query GetBrandEditQuery($brand_id: ID!) {
    getBrand(id: $brand_id) {
      id
      name
    }
  }
`;

const MUTATION = gql`
  mutation UpdateBrandMutation($updateBrand: UpdateBrandInput!) {
    updateBrand(input: $updateBrand) {
      success
      brand {
        id
        name
      }
    }
  }
`;

interface ComponentProps extends RouterProps {
  match: {
    params: {
      id: string;
    };
  };
}

class BrandEditQuery extends Query<
  GetBrandEditQuery,
  GetBrandEditQueryVariables
> {}

class BrandMutation extends Mutation<
  UpdateBrandMutation,
  UpdateBrandMutationVariables
> {}

export class EditBrand extends React.PureComponent<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
    this.onCompleted = this.onCompleted.bind(this);
  }

  onSubmit(
    updateBrand: MutationFn<UpdateBrandMutation, UpdateBrandMutationVariables>,
    id: string
  ) {
    console.log();
    return (params: BrandParams) => {
      const updateParams: UpdateBrandInput = { ...params, id };
      updateBrand({
        variables: { updateBrand: updateParams }
      }).then();
    };
  }

  onCompleted(data?: UpdateBrandMutation) {
    if (data && data.updateBrand.success && data.updateBrand.brand) {
      this.props.history.push(`/brands/${data.updateBrand.brand.id}`);
    }
  }
  render() {
    return (
      <BrandMutation mutation={MUTATION} onCompleted={this.onCompleted}>
        {(updateBrand, { data }) => (
          <BrandEditQuery
            query={QUERY}
            variables={{ brand_id: this.props.match.params.id }}
          >
            {({ loading, error, data }) => {
              console.log("data", data);
              if (loading || !data) return null;
              if (!data.getBrand) return <div>not found</div>;
              if (error) return <div>Error</div>;

              return (
                <BrandForm
                  brand={data.getBrand}
                  onSubmit={this.onSubmit(
                    updateBrand,
                    this.props.match.params.id
                  )}
                />
              );
            }}
          </BrandEditQuery>
        )}
      </BrandMutation>
    );
  }
}
