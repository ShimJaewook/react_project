<<<<<<< HEAD
import React, { Component } from "react";
import "./ItemView.css";
=======
import React, { Component } from "react"
import ItemDetailView from "./ItemDetailView"
import Popup from "reactjs-popup"
import "./ItemView.css"
>>>>>>> ffb6a0bf2807f18d7f4c33954798fa63de34fdc9

class ItemView extends Component {
  render() {
    const { item, onAdd_SelectedItem } = this.props;
    return (
      <div className="img_wrap">
<<<<<<< HEAD
        <img
          className="sub_imgs"
          src={item.imgUrl}
          width="200px"
          height="200px"
          onClick={() => onAdd_SelectedItem(item)}
        />
=======
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
>>>>>>> ffb6a0bf2807f18d7f4c33954798fa63de34fdc9
      </div>
    );
  }
}

export default ItemView;
