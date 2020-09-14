// importing the context api stuff
import React, { createContext, useContext, useReducer } from 'react';

// preparing the data layer
export const StateContext = createContext();

// higher order component
// we're going to be using this to essentially wrap our app
// so the main purpose of this block here is
// it allows us to have something called a state provider and
// we basically just wrap the app inside of the state provider and it provides that sort of data layer functionality
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// whenever we want to pull something from the data layer we use this 'useStateValue' hook
export const useStateValue = () => useContext(StateContext);
