import React, { useState } from "react";
import BookingProcess from "./BookingProcess";
import Header from "./Header";
import "./App.css";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="app">
      {show ? <Header /> : ""}
      <BookingProcess setShow={setShow} />
    </div>
  );
};

export default App;
