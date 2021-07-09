import React,{useState,createContext} from 'react'

export const SignupContext = createContext();

export const SignupProvider = (props) => {
    const [user,setUser] = useState({
        userName:'',
        email:'',
    })
    return (
        <SignupContext.Provider value={[user,setUser]}>
            {props.children}
        </SignupContext.Provider>
    )
}


