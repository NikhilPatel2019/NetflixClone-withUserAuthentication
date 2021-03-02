import React, { useRef } from 'react';
import { auth } from '../firebase';
import './signupScreen.css';

function SignUp(){

    const emailref = useRef(null);
    const passwordref = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch(error => {
            alert(error.message);
        });
    }

    const signIn = (e) =>{
        e.preventDefault(); 
        auth.signInWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch(error => {
            alert(error.message);
        });
    }

    return(
        <div className="signupscreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailref} placeholder="Email" type="email"/>
                <input ref={passwordref} placeholder="password" type="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signupscreen-grey">New to Netflix? </span> 
                    <span className="signupscreen-link" onClick={register}>Sign Up now.</span></h4>
            </form>
        </div>
    )
}

export default SignUp;