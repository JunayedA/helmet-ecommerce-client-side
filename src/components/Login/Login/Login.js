import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle,
        toggleLogin,
        handleNameChange,
        handlePasswordChange,
        handleEmailChange,
        handleResetPassword,
        handleRegistration,
        error,
        setUser,
        setIsLoading,
        isLogin } = useAuth();

        const location = useLocation();
        const history = useHistory();
        const redirectUrl = location.state?.from || '/home';

        const handleGoogleLogin = () =>{
          signInUsingGoogle()
          .then(result => {
            setUser(result.user);
            history.push(redirectUrl);
        })
        .finally(() => setIsLoading(false));
        }
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-dark" animation="glow">Google Sign In</button>
            <div>
            <form onSubmit={handleRegistration}>
        <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
  {!isLogin &&<div className="row mb-3">
    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your name"/>
    </div>
  </div>}
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
        <span className="d-flex justify-content-start">
        <label className="form-check-label" htmlFor="gridCheck1">
          Already Registered?
        </label>
        </span>
      </div>
    </div>
  </div>
  <div className="row mb-3 text-danger">
    {error}
  </div>
  <button type="submit" className="btn btn-primary me-2">{isLogin? 'Login': 'Register'}</button>
  <button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm">Reset Password</button>
</form>
            </div>
        </div>
    );
};

export default Login;