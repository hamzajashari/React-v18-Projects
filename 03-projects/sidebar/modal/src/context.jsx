import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);

  const openSideBar = () => {
    setIsSideBar(true);
  };

  const closeSideBar = () => {
    setIsSideBar(false);
  };
  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSideBar,
        isModal,
        openModal,
        openSideBar,
        closeModal,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}