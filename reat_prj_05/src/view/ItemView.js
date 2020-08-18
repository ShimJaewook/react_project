import React, { Component } from "react"
import ItemDetailView from "./ItemDetailView"
import Popup from "reactjs-popup"
import "./ItemView.css"

class ItemView extends Component {
  render() {
    const { item } = this.props
    return (
      <div className="img_wrap">
        <Popup
          trigger={
            <button className="popupButton">
              <img className="sub_imgs" src={item.imgUrl} width="200px" height="200px" />
            </button>
          }
          modal
          closeOnDocumentClick
        >
          <ItemDetailView item={item} />
        </Popup>
      </div>
    )
  }
}

export default ItemView
