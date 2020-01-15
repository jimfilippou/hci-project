import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import anna from '../../assets/images/main/anna.svg';
import swingUP from '../../assets/images/main/swing/up.svg';
import swingDown from '../../assets/images/main/swing/down.svg';
import Slider from '@material-ui/core/Slider';
import './main.scss';

function Main() {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    const [degrees, setDegrees] = React.useState(24)


    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };


    const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

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

    const IOSSlider = withStyles({
        root: {
            color: '#3880ff',
            height: 2,
            padding: '15px 0',
        },
        thumb: {
            height: 28,
            width: 28,
            backgroundColor: '#fff',
            boxShadow: iOSBoxShadow,
            marginTop: -14,
            marginLeft: -14,
            '&:focus,&:hover,&$active': {
                boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    boxShadow: iOSBoxShadow,
                },
            },
        },
        active: {},
        valueLabel: { opacity: 0 },
        track: {
            height: 2, backgroundColor: '#fff'
        },
        rail: {
            height: 2,
            opacity: 0.5,
            backgroundColor: '#fff',
        },
        mark: {
            backgroundColor: '#bfbfbf',
            height: 8,
            width: 1,
            marginTop: -3,
        },
        markActive: {
            opacity: 1,
            backgroundColor: 'currentColor',
        },
    })(Slider);

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
                            {degrees}°C
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
                        <div onClick={() => setDegrees(degrees + 1)} className="button plus">
                            <i className="fas fa-plus"></i>
                        </div>
                        <div onClick={() => setDegrees(degrees - 1)} className="button minus">
                            <i className="fas fa-minus"></i>
                        </div>
                    </div>
                    <div className="unify">
                        <div className="button swing">
                            <img src={swingUP} />
                        </div>
                        <div className="button swing">
                            <img src={swingDown} />
                        </div>
                    </div>
                </div>
                <div className="mode-controls">
                    <div className="unify">
                        <div className="mode-elements-wrapper">
                            <p>Mode</p>
                            <div className="buttons">
                                <div className="button flake">
                                    <i className="far fa-snowflake"></i>
                                </div>
                                <div className="button fire">
                                    <i className="fas fa-fire"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fan-controls">
                    <div className="unify">
                        <div className="fan-controls-wrapper">
                            <p>Fan speed</p>
                            <IOSSlider aria-label="ios slider" defaultValue={60} valueLabelDisplay="on" />
                        </div>
                    </div>
                </div>
                <div className="timer">
                    <div className="unify">
                        <div className="timer-controls-wrapper">
                            <p>Timer</p>
                            <div className="outter-parent">
                                {
                                    [0, 0, 0].map((value, index) =>
                                        <div className="column">
                                            <i class="fas fa-chevron-up fa-2x"></i>
                                            <h3>00hrs</h3>
                                            <i class="fas fa-chevron-down fa-2x"></i>
                                        </div>
                                    )
                                }

                            </div>
                            <div className="start-btn">Start</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;