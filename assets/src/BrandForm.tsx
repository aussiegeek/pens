import * as React from "react";

interface ComponentProps {
  onSubmit: (params: BrandParams) => void;
  brand: {
    name: string;
  };
}

interface ComponentState {
  name?: string;
}

export interface BrandParams {
  name: string;
}
export class BrandForm extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.valueChanged = this.valueChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {};
  }

  onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    this.props.onSubmit({ name: this.state.name || "" });
  }

  static getDerivedStateFromProps(
    nextProps: ComponentProps,
    prevState: ComponentState
  ) {
    const newState: ComponentState = {};
    if (!prevState.name) {
      newState.name = nextProps.brand.name;
    }
    return newState;
  }
  valueChanged(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input value={this.state.name} onChange={this.valueChanged} />
        <input type="submit" />
      </form>
    );
  }
}
