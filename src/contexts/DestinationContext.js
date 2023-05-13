import React, { useState, createContext } from 'react';

export const DestinationContext = createContext();

const DestinationContextProvider = ({children}) => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <DestinationContext.Provider value={{selectedDestination, setSelectedDestination}}>
      {children}
    </DestinationContext.Provider>
  )
}
export default DestinationContextProvider