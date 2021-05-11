import React, { useEffect, useReducer, useState } from 'react';
import app from "../base.js";


export const authContext = React.createContext();

const INIT_STATE = {
    isAuth:false
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ".":
            return {}
        default: return state
    }
}

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
    }, [])

    async function registerUser(event, newUser, history) {
        event.preventDefault();
        try {
            await app.auth()
                .createUserWithEmailAndPassword(newUser.email, newUser.password);
            console.log(newUser.email, newUser.password);
            history.push('/')
            console.log(currentUser);
        } catch (err) {
            console.log(err);
        }
    }

    async function loginUser(event, userData, history) {
        event.preventDefault();
        try {
            const newUser = await app
                .auth()
                .signInWithEmailAndPassword(userData.email, userData.password);
            // console.log(userData.email, userData.password);
            setCurrentUser(newUser.user)
            console.log(currentUser);
            history.push('/')
        } catch (err) {
            console.log(err);
        }
    }

    const logoutUser = async () => {
        try {
            await app.auth().signOut();
            console.log('User Logged Out!');
        } catch (err) {
            console.log('err:', err);
        }
    }

    return (
        <authContext.Provider value={{
            currentUser,
            registerUser,
            loginUser,
            logoutUser
        }}>
            {children}
        </authContext.Provider>
    );
};


export default AuthContextProvider;