// MyContext.js
import React, { createContext, useState, useEffect } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {

  /*=======(API Data Start)====*/
  const [apiData, setApiData] = useState(() => {
    const savedApiData = sessionStorage.getItem('apiData');
    return savedApiData ? JSON.parse(savedApiData) : null;
  });
  /*=======(API Data End)====*/
  
  /*=======(SelectedItem Part Start)====*/
  const [selectedItem, setSelectedItem] = useState(() => {
    const savedSelectedItem = sessionStorage.getItem('selectedItem');
    return savedSelectedItem ? JSON.parse(savedSelectedItem) : null;
  });
  /*=======(SelectedItem Part End)====*/
  
  console.log(selectedItem);

  useEffect(() => {
    sessionStorage.setItem('apiData', JSON.stringify(apiData));
    sessionStorage.setItem('selectedItem', JSON.stringify(selectedItem));
  }, [apiData, selectedItem]);

  return (
    <MyContext.Provider value={{ apiData, setApiData, selectedItem, setSelectedItem }}>
      {children}
    </MyContext.Provider>
  );
};
