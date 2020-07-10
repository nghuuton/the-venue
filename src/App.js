import React from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueNfo from "./components/venueNfo";
import HightLights from "./components/HighLights";
import Pricing from "./components/pricing";

function App() {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Header />
      <Featured />
      <VenueNfo />
      <HightLights />
      <Pricing />
    </div>
  );
}

export default App;
