import React from 'react';
import logo from '../../assets/images/logo.svg';
import ac from '../../assets/images/aircondition.svg';
import './Login.scss';

function Login() {
    return (
        <div className="wrapper">
            <div className="container">
                <img className="text-logo" src={logo} />
                <img className="icon-logo" height="100" src={ac} />
                <button className="skip-btn">Παράβλεψη &nbsp;<i class="fas fa-arrow-right"></i></button>
                <input placeholder="e-mail" className="email-inp" />
                <input placeholder="Κωδικός" className="email-inp" />
                <button className="login-btn">Είσοδος &nbsp;<i class="fas fa-sign-in-alt"></i></button>
                <p className="forgot-lbl">Ξέχασα τον κωδικό μου &nbsp;<i class="fas fa-lock"></i></p>
            </div>
        </div>
    )
}

export default Login;