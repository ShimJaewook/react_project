import React from "react";
import ItemListContainer from "./container/ItemListContainer";
import MainImageContainer from "./container/MainImageContainer";
import { Button } from "reactstrap";

function App() {
  return (
    <div>
      <MainImageContainer />
      <ItemListContainer />
       <Button color="danger">Danger!</Button>
    </div>
  );
}

export default App;
