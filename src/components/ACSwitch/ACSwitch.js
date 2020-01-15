import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { green } from '@material-ui/core/colors';

function ACSwitch() {

    const [state, setState] = React.useState({
        checkedA: true
    });

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

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <GreenSwitch
            checked={state.checkedB}
            onChange={handleChange('checkedB')}
            value="checkedB"
        />
    )


}

export default ACSwitch;