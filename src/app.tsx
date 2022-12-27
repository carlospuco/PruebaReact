import DeleteIcon from "./assets/delete-icon.svg";
import WarningIcon from "./assets/warning-icon.svg";

import "./app.scss";

import { Button } from "./components/atoms/button/button";
import { Layer } from "./components/atoms/layer/layer";
import { Submit } from "./components/molecules/submit";
import { useState } from "react";

const App = () => {

  const [gifList, setGifList] =useState<string[]>([]);

  return (
    <Submit gifList={gifList} setGifList={setGifList} />
  );
};

export default App;
