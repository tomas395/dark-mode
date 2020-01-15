import useLocalStorage from "./local-storage";
import { useEffect } from "react";

const useDarkMode = (key, initialValue) => {
  const [enableDarkMode, setEnableDarkMode] = useLocalStorage(
    key,
    initialValue
  );
  const toggleDarkMode = event => {
    event.preventDefault();
    return enableDarkMode ? setEnableDarkMode(false) : setEnableDarkMode(true);
  };

  useEffect(() => {
    if (enableDarkMode === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [enableDarkMode]);

  return [enableDarkMode, setEnableDarkMode, toggleDarkMode];
};

export default useDarkMode;
