"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { fetchApi } from '../api';

type MyContextType = {
  user: string;
  setUser: (user: string) => void;
};

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [mainData, setMainData] = useState({});
  useEffect(() => {
    fetchApi().then((res) => {
      console.log(res);
      setMainData(res);
    });
  }, []);


  return (
    <MyContext.Provider value={{ mainData, setMainData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
