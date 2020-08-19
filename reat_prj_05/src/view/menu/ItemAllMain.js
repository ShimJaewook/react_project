import React from "react";
import ItemCheckedContainer from "../../container/ItemCheckedContainer";
import Selected_item_Container from "../../container/Selected_item_Container";
import "../ItemView.css";
import Sub_header from "./Sub_header";

function ItemAllMain() {
  return (
    <div className="sub_check">
      <Sub_header />
      <ItemCheckedContainer />
      <Selected_item_Container />
    </div>
  );
}

export default ItemAllMain;
