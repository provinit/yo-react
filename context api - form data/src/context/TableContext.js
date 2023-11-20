import { createContext, useContext, useReducer } from "react";

//define the initial state of the context
const initialState = {
  entries: [],
};

//create context
const TableContext = createContext();

//create a reducer function to update the state
const entryReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case "REMOVE_ENTRY":
        const updatedEntries = state.entries.filter(entry => entry!== action.payload);
        return{
            ...state,
            entries: updatedEntries,
        }
    default:
        return state;
  }
};

//Provider component to wrap wit context
export const EntryProvider = ({children}) => {
    const [state,dispatch] = useReducer(entryReducer, initialState);

    const addEntry = (entry) => {
        dispatch({type: "ADD_ENTRY", payload: entry});
    };

    const removeEntry = (entry) => {
        dispatch({type: "REMOVE_ENTRY", payload: entry});
    };

    return(
        <TableContext.Provider value={{state,addEntry,removeEntry}}>
                {children}
        </TableContext.Provider>
    )
}

//custom hook to consume to the context
export const useEntryContext = () => {
    return useContext(TableContext);
}
