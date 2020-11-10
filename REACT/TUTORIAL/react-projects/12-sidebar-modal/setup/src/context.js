import React, { useState, useContext } from 'react'


const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const[isSidebarOpen, setIsSidebarOpen]=useState(false)
    const[isModalOpen, setIsModalOpen]=useState(false)

    const openSidebar = () =>{
        setIsSidebarOpen(true);
    }

    const closeSidebar = () =>{
        setIsSidebarOpen(true);
    }

    const openModal = () =>{
        setIsOpenModal(true);
    }

    const closeModal = () =>{
        setIsOpenModal(true);
    }
return <AppContext.Provider value={{isModalOpen, isSidebarOpen, openModal, openSidebar, closeModal, closeSidebar}}>
    {children}</AppContext.Provider>
}

//custom hook
export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}