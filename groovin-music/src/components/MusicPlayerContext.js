import React, {useState} from 'react';


const MusicPlayerContext =  React.createContext([{}, () => {}]);  //Set context to recieve state. With initial value of an array of empty object and function.
const MusicPlayerProvider = (props) => { 
    const [state, setState] = useState({});    // useState hook provides us with state!! with variables of state, and setState.
    return (                                                    // Put the state object and set function into an array and pass into the context provider value. 
        <MusicPlayerContext.Provider value={[state, setState]}> 
            {props.children}
        </MusicPlayerContext.Provider>
    );

}

export {MusicPlayerContext, MusicPlayerProvider};

// To access the Context's state import it into a component and use the useContext hook in react!