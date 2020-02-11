import React from 'react';

import anna from '../../assets/images/main/anna.svg';
import swingUP from '../../assets/images/main/swing/up.svg';
import swingDown from '../../assets/images/main/swing/down.svg';

import store from '../../store';

// Import custom components
import FanSlider from '../FanSlider/FanSlider';
import ACSwitch from '../ACSwitch/ACSwitch';
import Timer from '../Timer/Timer';
import ACMode from '../ACMode/ACMode';

// Load styling
import './Main.scss';

function Main() {

    const [degrees, setDegrees] = React.useState(26)
    const [prevTemp, setprevTemp] = React.useState(undefined)

    function limit(action) {
        document.getElementById("audio").play();
        if (action === 0) {
            if (degrees === 16) {
                setDegrees(degrees);
            } else {
                setDegrees(degrees - 1);
            }
        } else {
            if (degrees === 30) {
                setDegrees(degrees);
            } else {
                setDegrees(degrees + 1);
            }
        }
    }

    function Audio(){
        document.getElementById("audio").play();
    }

    function turnOnAuto() {
        setprevTemp(degrees);
        setDegrees(26);
    }

    function turnOffAuto() {
        setDegrees(prevTemp);
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div className="topbar">
                    <div onClick={() => Audio()} className="switch">
                        <p>OFF</p>
                        <ACSwitch />
                        <p>ON</p>
                    </div>
                    <div>
                        <img alt="user" src={anna} />
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
                        <div onClick={() => limit(1)} className="button plus">
                            <i className="fas fa-plus"></i>
                        </div>
                        <div className="temp-temp">
                            <p>TEMP</p>
                        </div>
                        <div onClick={() => limit(0)} className="button minus">
                            <i className="fas fa-minus"></i>
                        </div>
                    </div>
                    <div className="unify">
                        <div onClick={() => Audio()} className="button swing">
                            <img alt="swing up" src={swingUP} />
                        </div>
                        <div className="swing-swing">
                            <p>SWING</p>
                        </div>
                        <div onClick={() => Audio()} className="button swing">
                            <img alt="swing down" src={swingDown} />
                        </div>
                    </div>
                </div>
                <div className="mode-controls">
                    <div className="unify">
                        <div className="mode-elements-wrapper">
                            <p>Mode</p>
                            <ACMode 
                                enable={turnOnAuto} 
                                disable={turnOffAuto}
                                />
                        </div>
                    </div>
                </div>
                <div className="fan-controls">
                    <div className="unify">
                        <div className="fan-controls-wrapper">
                            <p>Fan speed</p>
                            <FanSlider />
                        </div>
                    </div>
                </div>
                <div className="timer">
                    <div className="unify">
                        <div className="timer-controls-wrapper">
                            <p>Timer</p>
                            <Timer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
