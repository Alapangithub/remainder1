import React,{createContext,useReducer} from 'react'
import { Reducer } from './Reducer'
const initialState={}
export const Globalcontext=createContext(initialState)
export default function GlobalProvider({children}){
    const[cart,dispatchCart]=useReducer(Reducer,[])
    return(
        <Globalcontext.Provider value={{dispatchCart,cart}}>
            {children}
        </Globalcontext.Provider>
    )
}
