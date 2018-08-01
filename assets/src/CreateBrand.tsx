import * as React from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { RouterProps } from "react-router";
import { CreateBrandMutation, CreateBrandMutationVariables } from "../graphql";

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

// need loading indicator to disable button
// can we get a call back when done so if success we can redirect to brand show

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

  render() {
    return (
      <BrandMutation mutation={MUTATION} onCompleted={this.onCompleted}>
        {(createBrand, { data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                createBrand({
                  variables: {
                    createBrand: {
                      name: this.state.name
                    }
                  }
                }).then();
              }}
            >
              <input
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
              <input type="submit" />
            </form>
          </div>
        )}
      </BrandMutation>
    );
  }
}
