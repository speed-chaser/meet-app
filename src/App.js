import React from "react";

import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <CitySearch allLocations={[]} />
      <EventList events={[]} />
      <NumberOfEvents />
    </div>
  );
};

export default App;
