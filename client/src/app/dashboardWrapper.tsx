"use client";

import React, { useEffect } from 'react'
import Navbar from "@/app/(components)/Navbar"
import Sidebar from './(components)/Sidebar'
import StoreProvider, { useAppSelector } from './redux'

const DashboarLayout= ({children}: {children: React.ReactNode}) => {
  
  const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state)=> state.global.isDarkMode);

  useEffect(()=>{
    if (isDarkMode){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.add("light");
    }
  })

  return (
    <div className={`${isDarkMode ? "dark":"light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
        <Sidebar />
        <main className={`flex flex-col w-full h-full py-7 px-0 bg-gray-25 ${isSidebarCollapsed? "md:pl-24": "md:pl-72"}`}>
            <Navbar />
            {children}
        </main>
    </div>
  )
}

const DashboardWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <StoreProvider>
      <DashboarLayout>{children}</DashboarLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper