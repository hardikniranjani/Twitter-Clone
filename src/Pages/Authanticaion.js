import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';

function Authanticaion() {
    return (
        <div className="authantication">
            <div className="authantication_page_image">
                <img src="/images/Twitter.png" alt="TwitterImage" />
            </div>
            <div className="authantication_div">
                <Link className="auth_login" to="/login">Login</Link>
                <Link className="auth_signup" to="/signup">Signup</Link>
            </div>
        </div>
    )
}

export default Authanticaion;
