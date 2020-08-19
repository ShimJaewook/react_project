import React from "react"
import ItemListContainer from "./container/ItemListContainer"
import LoginContainer from "./container/LoginContainer"

<<<<<<< HEAD
import MainImageContainer from "./container/MainImageContainer";
import ItemAllMain from "./view/menu/ItemAllMain";
import Selected_item_Container from "./container/Selected_item_Container";
import Footer from "./view/menu/Footer";
import MiddleContentContainer from "./container/MiddleContentContainer";
=======
import MainImageContainer from "./container/MainImageContainer"
import ItemAllMain from "./view/menu/ItemAllMain"
import Selected_item_Container from "./container/Selected_item_Container"
import MiddleContentView from "./view/MiddleContentView"
>>>>>>> 89c5a8f3e0b7ff3d4cb36a05fca3f07f2c448175

function App() {
  return (
    <div>
      <LoginContainer />
      <MainImageContainer />

      <ItemListContainer />
      <MiddleContentContainer />
      <ItemAllMain />
<<<<<<< HEAD

      <Footer />
=======
      <MiddleContentView />
>>>>>>> 89c5a8f3e0b7ff3d4cb36a05fca3f07f2c448175
    </div>
  )
}

export default App
