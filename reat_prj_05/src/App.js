import React from "react";
import ItemListContainer from "./container/ItemListContainer";
import LoginContainer from "./container/LoginContainer";

import MainImageContainer from "./container/MainImageContainer";
import ItemAllMain from "./view/menu/ItemAllMain";
import Selected_item_Container from "./container/Selected_item_Container";

function App() {
  return (
    <div>
      <LoginContainer />
      <MainImageContainer />
      <ItemListContainer />
      <ItemAllMain />
    </div>
  );
}

export default App;
