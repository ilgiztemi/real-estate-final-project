import { createContext, useContext, useReducer } from "react";

const initialState = {
    adds: [],
    barFlag: false
}
const reducer = (state, action) => {
    switch(action.type) {
        default:
            throw new Error(`Unrecognized action: ${action.type}`);
    }
}
export const AddsContext = createContext();
export const AddsProvider = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialState);
console.log(state)
    return(
        <AddsContext.Provider value={{state}}>
            {children}
        </AddsContext.Provider>
    )
}
export const useAdds = () => useContext(AddsContext);