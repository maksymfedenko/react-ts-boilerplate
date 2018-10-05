import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundRoute from 'routes/NotFound/NotFound';
import ExampleRoute from 'routes/Example/Example';
import DefaultLayout from 'componentsExamples/layouts/DefaultLayout/DefaultLayout';
import MinimalLayout from 'componentsExamples/layouts/MinimalLayout/MinimalLayout';

class Main extends React.Component {
  private renderLayout = (Layout, Component) => (props) => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };

  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/example" />
        <Route
          path="/example"
          render={this.renderLayout(DefaultLayout, ExampleRoute)}
        />
        <Route render={this.renderLayout(MinimalLayout, NotFoundRoute)} />
      </Switch>
    );
  }
}

export default Main;
