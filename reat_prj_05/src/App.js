<<<<<<< HEAD
import React from "react";
import ItemListContainer from "./container/ItemListContainer";
import LoginContainer from "./container/LoginContainer";

=======
import React, { Component } from "react"
import ItemListContainer from "./container/ItemListContainer"
import LoginContainer from "./container/LoginContainer"
>>>>>>> ed59289cac99c5bbf0d51af6a5d72d93a077c446
import MainImageContainer from "./container/MainImageContainer";
import ItemAllMain from "./view/menu/ItemAllMain";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Footer from "./view/menu/Footer";
import MiddleContentContainer from "./container/MiddleContentContainer";
<<<<<<< HEAD
=======
import Selected_item_Container from "./container/Selected_item_Container"
import {observer, inject} from "mobx-react";
>>>>>>> ed59289cac99c5bbf0d51af6a5d72d93a077c446

@inject("StateStore")
@observer
class App extends Component {
  
  
  render () {
    const state = this.props.StateStore.getState; 

<<<<<<< HEAD
      <ItemListContainer />

      <ItemAllMain />
      <Footer />
    </div>
  );
}

export default App;
=======
    return (
      <div>
        <LoginContainer />

        {state==="home" && <MainImageContainer /> }
        {state==="home" && <ItemListContainer /> }
        {state==="home" && <MiddleContentContainer /> }

        {state==="allItem" && <ItemAllMain /> }

        <Footer />
      </div>
    )
  }
}
export default App
>>>>>>> ed59289cac99c5bbf0d51af6a5d72d93a077c446
