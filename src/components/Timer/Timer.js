import React, { useState } from 'react';
import toast from 'toasted-notes'


export default () => {

    const [state, setState] = useState({
        hrs: 0, mins: 0, sec: 0
    });


    const handleChange = (target, action) => {

        if (state[target] === 0 && action === 'sub') return;

        setState({
            ...state,
            [target]: action === 'add' ? state[target] + 1 : state[target] - 1
        });

    }

    return (
        <div>
            <div className="outter-parent">
                {
                    Object.keys(state).sort().map((value, index) =>
                        <div key={index} className="column">
                            <i onClick={() => handleChange(value, 'add')} className="fas fa-chevron-up fa-2x"></i>
                            <h3>{state[value]}{value}</h3>
                            <i onClick={() => handleChange(value, 'sub')} className="fas fa-chevron-down fa-2x"></i>
                        </div>
                    )
                }
            </div>
            <div
                onClick={() => {
                    if (!state.hrs && !state.mins && !state.sec) return;
                    toast.notify(
                        `Timer set! AC will close in ${state.hrs + ' hours'}, ${state.mins + ' minutes'} and ${state.sec + ' seconds.'}`
                        , { duration: 3000 }
                    );
                    setState({
                        hrs: 0, mins: 0, sec: 0
                    });
                }}
                className="start-btn"
            >
                Start
            </div>
        </div>
    )

}
