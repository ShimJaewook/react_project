import React from "react";
import ItemListContainer from "./container/ItemListContainer";
import MainImageContainer from "./container/MainImageContainer";
import ItemAllMain from "./view/menu/ItemAllMain";


function App() {
  return (
    <div>
      <MainImageContainer />
      <ItemListContainer />
      <ItemAllMain />
    </div>
  );
}

export default App;
