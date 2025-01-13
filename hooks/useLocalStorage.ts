import { useState, useEffect } from "react";

function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState<string | null>(null);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (e) {
      console.log(e);
      setStoredValue(initialValue);
    }
  }, [key, initialValue]);

  useEffect(() => {
    try {
      if (storedValue !== null) {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (e) {
      console.log(e);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;