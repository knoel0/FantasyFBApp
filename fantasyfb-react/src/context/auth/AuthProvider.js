import React, { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../../src/firebase';

const AuthContext = createContext(null);

function AuthProvider({ children }) {
    
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(null);

    async function handleSignUp(event) {
        
        function isPasswordValid(password, confirmPassword) {
            let isValid = true;
            if (password !== '' && confirmPassword !== '') {
                if (password !== confirmPassword) {
                    isValid = false;
                }
            }
            return isValid;
        }

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        if (isPasswordValid(data.get('password'), data.get('confirm password'))) {
            createUserWithEmailAndPassword(auth, data.get('email'), data.get('password'))
                .then(() => {
                    console.log("Sign Up Success");
                    const origin = location.state?.from?.pathname || '/signin';
                    navigate(origin);
                }).catch(error => {
                    console.log("Sign Up Error");
                });
        } else {
            console.log('Passwords do not match');
            return;
        }
        
    }

    async function handleSignIn(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
            .then(userCredential => {
                console.log("Sign In Success");
                setUser(userCredential.user);
                const origin = location.state?.from?.pathname || '/home';
                navigate(origin);
            }).catch(error => {
                console.log("Sign In Error", error);
            });
    }

    async function handleSignOut() {
        
        signOut(auth)
            .then(() => {
                console.log("Sign Out Success");
                setUser(null);
            }).catch(error => {
                console.log("Sign Out Error", error);
            });
    }

    const value = { user, onSignUp: handleSignUp, onSignIn: handleSignIn, onSignOut: handleSignOut }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => { return useContext(AuthContext); }

export { AuthProvider, useAuth }