import React from 'react';

import withCounter from './../with-counter.hoc';

const HoverCounter = ({ count, onIncrementCount }) => {
    return (
        <div style={{ height: 200, width: 200, background: 'tomato' }}>
            <h1 onMouseOver={onIncrementCount}>Mouse hovered {count} times</h1>
        </div>
    );
};

export default withCounter(HoverCounter);
