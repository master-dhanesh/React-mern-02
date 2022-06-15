import {createContext } from 'react';


export const IndexContext = createContext(null);

const index = ({value,children}) => {
  return <IndexContext.Provider value={value}>
            {children}
        </IndexContext.Provider>
  
}

export default index