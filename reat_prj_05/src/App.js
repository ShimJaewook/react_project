import React from "react"
import ItemListContainer from "./container/ItemListContainer"
import LoginContainer from "./container/LoginContainer"
import MainImageContainer from "./container/MainImageContainer";
import ItemAllMain from "./view/menu/ItemAllMain";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Footer from "./view/menu/Footer";
import MiddleContentContainer from "./container/MiddleContentContainer";
import Selected_item_Container from "./container/Selected_item_Container"


function App() {
  return (
    <div>
      <LoginContainer />
      <MainImageContainer />

      <ItemListContainer />
      <MiddleContentContainer />
      <ItemAllMain />

      <Footer />

    </div>
  )
}

export default App
