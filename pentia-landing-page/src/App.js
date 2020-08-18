import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import useWindowDimensions from "./utilities/useWindowDimensions";

function App() {
  const {width } = useWindowDimensions();
  const [isDesktopDisplay, setIsDesktopDisplay] = useState(null);

  useEffect(() => {
    if (width >= 800) {
      setIsDesktopDisplay(true);
    } else {
      setIsDesktopDisplay(false);
    }
  }, [width, isDesktopDisplay]);

  return (
    <div className="App" style={styles.wrapper}>
      <nav>
        <Navigation isDesktopDisplay={isDesktopDisplay}></Navigation>
      </nav>

      <main style={isDesktopDisplay ? styles.mainContainer :{flex :1}}>
        <Home />
        <About />
        <Contact />
      </main>
    </div>
  );
}

let styles = {
  wrapper: {
    display: "flex",
  },
  mainContainer: {
    flex: 1,
    paddingLeft: "60px",
  },
  mainContainerSmall: {

  }
};
export default App;
