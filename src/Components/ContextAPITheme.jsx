
import React, { useContext } from "react";


const ThemeContext = React.createContext();

const ContextAPITheme = () => {
  return (
    <ThemeContext.Provider value="light">
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}


function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={`${theme === "dark"? "bg-gray-800 text-white" : "bg-gray-200 text-gray-500"} p-2 font-bold text-2xl`}>I am styled by {theme} theme!</button>;
}


export default ContextAPITheme




