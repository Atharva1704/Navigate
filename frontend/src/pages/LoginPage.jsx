import React, { useState } from 'react';
import LoginUser from '../components/AuthComponents/LoginUser';
import RegisterUser from '../components/RegisterUser';

function LoginPage() {
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <div>
            <h1>{isRegistering ? 'Register Page' : 'Login Page'}</h1>
            {isRegistering ? (
                <RegisterUser />
            ) : (
                <LoginUser />
            )}
            <button onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? 'Already have an account? Login!' : 'Create an Account!'}
            </button>
        </div>
    );
}

export default LoginPage;
