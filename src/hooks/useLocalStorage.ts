import React from "react";
import User from "../interface/User";

export const useLocalStorageState = () => {
  // const parsedLocalStorage = JSON.parse(localStorage.getItem(key) || "{}");
  // const initialValue =
  //   Object.keys(parsedLocalStorage).length > 0 ? parsedLocalStorage : value;
  // const [localStorageState, setLocalStorageState] =
  //   React.useState(initialValue);
  // const handleUpdateLocalStorageState = React.useCallback(
  //   (x) => {
  //     setLocalStorageState(x);
  //     localStorage.setItem(key, JSON.stringify(x));
  //   },
  //   [key]
  // );

  const getItem = (key:string): string | null  => localStorage.getItem(key);

  const setItem = (key: string, value: string): void =>
    localStorage.setItem(key, value);

  const removeItem = (key:string):void => {
    localStorage.removeItem(key)
  }

  return { getItem, setItem ,removeItem};
};
