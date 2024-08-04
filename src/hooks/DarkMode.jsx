import React, { createContext, useState } from 'react'

export const DarkModeContext = createContext();

const DarkModeContextProvider = ({children}) => {
  const [theme,setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <DarkModeContext.Provider value={{theme,toggleTheme}}>
      {children}
      </DarkModeContext.Provider>
  )
}

export default DarkModeContextProvider