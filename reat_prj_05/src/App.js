import React from "react";
import ItemListContainer from "./container/ItemListContainer";
import MainImageContainer from "./container/MainImageContainer";
import ItemAllMain from "./view/menu/ItemAllMain";
import Selected_item_Container from "./container/Selected_item_Container";

function App() {
  return (
    <div>
      <MainImageContainer />
      <ItemListContainer />
      <ItemAllMain />
      <Selected_item_Container />
    </div>
  );
}

export default App;
