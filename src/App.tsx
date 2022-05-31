import "./app.scss";

import React, { useState } from "react";

import { Header } from "./header/Header";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <div>
      <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
    </div>
  );
}

export default App;
