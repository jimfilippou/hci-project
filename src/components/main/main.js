import React from 'react';

import anna from '../../assets/images/main/anna.svg';
import swingUP from '../../assets/images/main/swing/up.svg';
import swingDown from '../../assets/images/main/swing/down.svg';

// Import custom components
import FanSlider from '../FanSlider/FanSlider';
import ACSwitch from '../ACSwitch/ACSwitch';
import Timer from '../Timer/Timer';

// Load styling
import './Main.scss';
import ACMode from '../ACMode/ACMode';


function Main() {


    const [degrees, setDegrees] = React.useState(24)


    return (
        <div className="wrapper">
            <div className="container">
                <div className="topbar">
                    <div className="switch">
                        <p>OFF</p>
                        <ACSwitch/>
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
                            <ACMode/>
                        </div>
                    </div>
                </div>
                <div className="fan-controls">
                    <div className="unify">
                        <div className="fan-controls-wrapper">
                            <p>Fan speed</p>
                            <FanSlider/>
                        </div>
                    </div>
                </div>
                <div className="timer">
                    <div className="unify">
                        <div className="timer-controls-wrapper">
                            <p>Timer</p>
                            <Timer/>
                            <div className="start-btn">Start</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;