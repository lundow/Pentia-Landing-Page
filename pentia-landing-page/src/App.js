import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App" style ={styles.wrapper} >
      <nav>
        <Navigation></Navigation>
      </nav>

      <main style={styles.mainContainer}>
        <Home/>
        <About/>
        <Subscribe/>
      </main>
    </div>
  );
}

let styles = {
  wrapper: {
    display:"flex",
    //flexDirection:"column"
  },
  mainContainer:{
    flex:1,
    paddingLeft:"60px"
  }
};
export default App;
