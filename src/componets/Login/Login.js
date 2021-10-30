import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { handleGoogleSignIn, setUserName, setIsLoading } = useAuth();
    const [name, setName] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    setUserName(name);

    const singInUsingGoogle = () => {
        handleGoogleSignIn()
            .then((result) => {
                history.push(redirect_url);

            }).finally(() => {
                setIsLoading(false)
            });

    }

    return (
        <div className="mx-auto my-5 w-75">

            <button className="btn btn-danger" style={{ marginBottom: "300px", marginTop: "60px" }} onClick={singInUsingGoogle}>Google Sign In</button>

        </div>
    );
};

export default Login;