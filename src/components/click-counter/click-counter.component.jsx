import React from 'react';

import withCounter from './../with-counter.hoc';

const ClickCounter = ({ count, onIncrementCount }) => {
    return (
        <button onClick={onIncrementCount} style={{ height: 200, width: 200 }}>
            <span style={{ fontSize: 36, fontWeight: 'bold' }}>Clicked {count}</span>
        </button>
    );
};

export default withCounter(ClickCounter);
