import React, { useEffect, useState } from 'react'
import './landing.css';
import SignUp from '../../components/Modals/SignUp';
import SignIn from '../../components/Modals/SignIn';

export default function Landing() {

    const [signUpState, setSignUpState] = useState({
        isOpen: false
    })
    const [signInState, setSignInState] = useState({
        isOpen: false
    })

    return (
        <>
        <h1>Kanem's FantasyFB App</h1>
        <div className="btn-container">
            <button className="signInBtn"
                onClick = {() =>
                    setSignInState({
                        isOpen: true
                    })
                }
                >Sign In
            </button>
            <button className="signUpBtn"
                onClick = {() =>
                    setSignUpState({
                        isOpen: true
                    })
                }
                >Sign Up
            </button>
        </div>
        <SignUp
            open={signUpState.isOpen}
        />
        <SignIn
            open={signInState.isOpen}
        />
        </>
    )
}