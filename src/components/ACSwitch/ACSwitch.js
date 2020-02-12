import React, { useContext, useState } from 'react';
import store from '../../store';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { green } from '@material-ui/core/colors';

function ACSwitch() {
    

    const context = useContext(store);
    const [render, setrender] = useState(undefined);

    const GreenSwitch = withStyles({
        
        switchBase: {
            color: green[300],
            '&$checked': {
                color: green[500],
            },
            '&$checked + $track': {
                backgroundColor: green[500],
            },
        },
        checked: {},
        track: {},
    })(Switch);


    return (
        <GreenSwitch
            checked={context.on}
            onChange={() => { context.on = !context.on; setrender(render === undefined ? null : undefined) }}
        />
    )


}

export default ACSwitch;