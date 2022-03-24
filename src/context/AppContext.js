import {createContext, useState, useEffect, useReducer} from "react";
import { useGetMug2 } from '../hooks/useGetMug'
import {listReducer, listActions} from "../reducers/listReducer";

export const AppContext = createContext();

const AppContextProvider = ({children})=>{

    const getUserFromLS=()=>{
        let user = localStorage.getItem('user');
        if(user){
            return JSON.parse(user)
        }
    }
    
    const getListFromLS=()=>{
        let list = localStorage.getItem('list');
        if(list){
            return JSON.parse(list)
        }
        return []
    }
    
    let mug = useGetMug2()

    const [user, _setUser]=useState(getUserFromLS());
    const [alert, setAlert]=useState({});
    const [dispatch]=useReducer(listReducer, getListFromLS())

    useEffect(
        ()=>{
            localStorage.setItem(mug, JSON.stringify(mug))
        },
        [mug]
    )

    const values={
        user,
        setUser:(user)=>{
            localStorage.setItem('user',JSON.stringify(user))
            _setUser(user)
        },
        alert,
        setAlert,
        
        addToList:(mug)=>{
            dispatch({type: listActions.addToList, mug})
        },
        removeFromList:(mug)=>{
            dispatch({type: listActions.removeFromList, mug})
        },
        emptyList:()=>{
            dispatch({type: listActions.emptyList})
        },
        
    }    
    
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
    }   

export default AppContextProvider