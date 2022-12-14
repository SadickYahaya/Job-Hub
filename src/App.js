import React from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";

import Header from "./components/Header";
// import Search from "./components/Search";
import { lightTheme, darkTheme } from "./utils/theme";
import { GlobalStyles } from "./utils/global";
import JobDetails from "./components/Jobs/JobDetails";
import Home from "./components/Home";

const App = () => {
  const [theme, setTheme] = useLocalStorage("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles className="global" />
        <Header onClick={toggleTheme} darkMode={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-details" element={<JobDetails />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
