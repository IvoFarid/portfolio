import { useState, useEffect } from "react";

function useLocalStorage(key:string, initialValue: string) {
  //state to store our value
  const [storedValue, setStoredValue] = useState(()=>{
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    }
    catch (e) {
      console.log(e);
      return initialValue;
    }
  })

  useEffect(()=>{
    try {
      const valueToStore =
      typeof storedValue === "function" ? storedValue(storedValue) : storedValue;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch(e) {
      console.log(e)
    }
  },[key,storedValue])

  return [storedValue, setStoredValue];
}

export default useLocalStorage;