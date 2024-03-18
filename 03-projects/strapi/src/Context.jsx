import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSideBar, setIsSideBar] = useState(false);
  const [pageId,setPageId] = useState(null);
  const openSideBar = () => {
    setIsSideBar(true);
  };
  const closeSideBar = () => {
    setIsSideBar(false);
  };

  return (
    <AppContext.Provider value={{ isSideBar, openSideBar, closeSideBar,pageId,setPageId }}>
      {children}
    </AppContext.Provider>
  );
};


export const useGlobalContext = () =>{
  return useContext(AppContext);
}

