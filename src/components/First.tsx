import * as React from 'react';

export default (props) => {
    if(props.age > 18) {
        return (
            <h1>You're too older</h1>
        )
    }
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}; 