import React, { useState } from 'react';

export default () => {

    const [state, setState] = useState({
        hrs: 0, mins: 0, sec: 0
    });

    const handleChange = (target, action) => {

        if (state[target] === 0 && action === 'sub') return;

        setState({
            ...state,
            [target]: action == 'add' ? state[target] + 1 : state[target] - 1
        });

    }

    return (
        <div className="outter-parent">
            {
                Object.keys(state).sort().map((value) =>
                    <div className="column">
                        <i onClick={() => handleChange(value, 'add')} class="fas fa-chevron-up fa-2x"></i>
                        <h3>{state[value]}{value}</h3>
                        <i onClick={() => handleChange(value, 'sub')} class="fas fa-chevron-down fa-2x"></i>
                    </div>
                )
            }
        </div>
    )

}
