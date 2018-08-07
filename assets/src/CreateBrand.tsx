import * as React from "react";
import { gql } from "apollo-boost";
import { Mutation, MutationFn } from "react-apollo";
import { RouterProps } from "react-router";
import { CreateBrandMutation, CreateBrandMutationVariables } from "../graphql";
import { BrandForm, BrandParams } from "./BrandForm";

const MUTATION = gql`
  mutation CreateBrandMutation($createBrand: CreateBrandInput!) {
    createBrand(input: $createBrand) {
      success
      brand {
        id
        name
      }
    }
  }
`;

class BrandMutation extends Mutation<
  CreateBrandMutation,
  CreateBrandMutationVariables
> {}

type ComponentProps = RouterProps;
interface ComponentState {
  name: string;
}
export class CreateBrand extends React.Component<
  ComponentProps,
  ComponentState
> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { name: "" };
    this.onCompleted = this.onCompleted.bind(this);
  }
  onCompleted(data?: CreateBrandMutation) {
    if (data && data.createBrand.success && data.createBrand.brand) {
      this.props.history.push(`/brands/${data.createBrand.brand.id}`);
    }
  }

  onSubmit(
    createBrand: MutationFn<CreateBrandMutation, CreateBrandMutationVariables>
  ) {
    return (params: BrandParams) => {
      createBrand({
        variables: { createBrand: params }
      }).then();
    };
  }

  render() {
    return (
      <BrandMutation mutation={MUTATION} onCompleted={this.onCompleted}>
        {(createBrand, { data }) => (
          <BrandForm
            brand={{ name: "" }}
            onSubmit={this.onSubmit(createBrand)}
          />
        )}
      </BrandMutation>
    );
  }
}
