import React from "react";
import ItemCheckedContainer from "../../container/ItemCheckedContainer";
import Selected_item_Container from "../../container/Selected_item_Container";
import "../ItemView.css";

function ItemAllMain() {
  return (
    <div className="sub_check">
      <ItemCheckedContainer />
      <Selected_item_Container />
    </div>
  );
}

export default ItemAllMain;
