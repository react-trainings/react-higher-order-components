import React, { Component } from 'react';

class ClickCounter extends Component {
    state = { count: 0 };

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            };
        });
    };

    render() {
        const { count } = this.state;
        return <button onClick={this.incrementCount}>Click {count} times</button>;
    }
}

export default ClickCounter;
