import React, { PureComponent } from 'react';

interface IProps {
  children: any;
}

class MinimalLayout extends PureComponent<IProps> {
  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

export default MinimalLayout;
