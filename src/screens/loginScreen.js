import React, { useState }  from 'react';
import SignIn from './signupScreen';
import './loginScreen.css';

function LoginScreen(){
    const [login, setLogin] = useState(false);

    return(
        <div className="loginscreen">
            <div className="loginscreen-background">
                <img className="loginscreen-logo"
                     src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                     alt="Netflix-logo">
                </img>
                <button onClick={() => setLogin(true)} className="loginscreen-button">Sign In</button>
                <div className="loginscreen-gradient"></div>
                <div className="loginscreen-body">
                    {login ? 
                        <SignIn /> : 
                        (
                            <>
                            <h1>See What's next.</h1>
                            <h2>WATCH ANYWHERE. CANCEL ANYTIME.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="loginscreen-input">
                            <form>
                               <input type="email" placeholder="Email Address"/>
                               <button onClick={() => setLogin(true)} className="loginscreen-getstarted">GET STARTED</button>
                            </form>
                            </div>  
                            </>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default LoginScreen;