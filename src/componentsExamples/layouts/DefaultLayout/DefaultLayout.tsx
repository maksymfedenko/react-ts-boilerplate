import React, { PureComponent } from 'react';
import './DefaultLayout.scss';

interface IProps {
  children: any;
}

class DefaultLayout extends PureComponent<IProps> {
  render() {
    const { children } = this.props;

    return <div className="default-layout">{children}</div>;
  }
}

export default DefaultLayout;
