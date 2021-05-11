import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
import './LogIn.css'

const LogIn = () => {
    const { loginUser } = useContext(authContext);
    const history = useHistory();
    let userData = {};

    function handleInputs(event) {
        userData = {
            ...userData,
            [event.target.name]: event.target.value
        }
    }

    return (
        <div>
            <div className="login-page">
                <div className="form">
                    <form onSubmit={(event) => loginUser(event, userData, history)}>
                        <h3>Sign In</h3>
                        <input onChange={handleInputs} type="text" id="email" name="email" placeholder="email" />
                        <input onChange={handleInputs} type="text" id="password" name="password" placeholder="password" />
                        <button type="submit">login</button>
                        <Link to='/regist'>
                            <p className="message">Not registered? Create an account</p>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;