import React, { useEffect, useState } from "react";

import APIPractice from "./Components/APIPractice";
import { BrowserRouter } from "react-router-dom";

// Functional component
function App() {


  return (
    <>
      <BrowserRouter>
        <APIPractice />
      </BrowserRouter>
    </>
  );
}

export default App;
