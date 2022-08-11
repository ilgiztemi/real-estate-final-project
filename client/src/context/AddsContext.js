import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
    adds: null,
    barFlag: false,
    page: 0,
    perPage: 3
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'add-all-adds': {
            return {...state, adds: action.data}
        }
        case 'page': {
            return {...state, page: action.index}
        }
        default:
            throw new Error(`Unrecognized action: ${action.type}`);
    }
}
export const AddsContext = createContext();
export const AddsProvider = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialState);
useEffect(() => {
    fetch('/api/adds').then(res => res.json()).then(data => addAllAddsFn(data))
}, [])
const addAllAddsFn = (data) => {
    dispatch({
        type: 'add-all-adds',
        ...data
    })
}
const paginate = (el, index) => {
    dispatch({
        type: "page",
        index,
    });
};
console.log(state)
    return(
        <AddsContext.Provider value={{state, actions: {paginate}}}>
            {children}
        </AddsContext.Provider>
    )
}
export const useAdds = () => useContext(AddsContext);