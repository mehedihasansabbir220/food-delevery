import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../contex/hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    let history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })

    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john website? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>

                <Button variant="primary" onClick={handleGoogleLogin}>Google Sign In</Button>
                {/*  <button
                    className="btn-regular"
                    onClick={handleGoogleLogin}
                >Google Sign In</button> */}
            </div>

        </div>
    );
};

export default Login;