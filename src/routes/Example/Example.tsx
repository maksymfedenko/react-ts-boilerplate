import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Counter from 'componentsExamples/counter/Counter';
import './Example.scss';

class Example extends PureComponent {
  render() {
    return (
      <div className="example">
        <h2>React TypeScript Boilerplate</h2>
        <img src="/images/example.svg" />
        <Counter />
        <Link to="/another-page">Link to another page</Link>
      </div>
    );
  }
}

export default Example;
