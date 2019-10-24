import React, { Component } from 'react';

const withCounter = WrappedComponent => {
  return class WithCounter extends Component {
    state = { count: 0 };

    incrementCount = () => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          onIncrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  };
};

export default withCounter;
