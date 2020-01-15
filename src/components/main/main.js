import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import anna from '../../assets/images/main/anna.svg'
import './main.scss';

function Main(props) {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

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
        <div className="wrapper">
            <div className="container">
                <div className="topbar">
                    <div className="switch">
                        <p>OFF</p>
                        <GreenSwitch
                            checked={state.checkedB}
                            onChange={handleChange('checkedB')}
                            value="checkedB"
                        />
                        <p>ON</p>
                    </div>
                    <div>
                        <img src={anna} />
                    </div>
                </div>
                <div className="humidity">
                    <i className="fas fa-tint drop"></i>
                    <p>Humidity: 20%</p>
                </div>
                <div className="temperature">
                    <div className="column">
                        <p>Inside</p>
                        <div className="circle">
                            5°C
                        </div>
                    </div>
                    <div className="column">
                        <p>Outside</p>
                        <div className="circle">
                            8°C
                        </div>
                    </div>
                </div>
                <div className="temp-controls">
                    <div className="unify">
                        <div className="button">
                            <i className=""></i>
                        </div>
                    </div>
                    <div className="unify">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;