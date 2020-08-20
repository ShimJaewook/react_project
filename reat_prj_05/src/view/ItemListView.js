import React, { Component } from "react";
// import ItemView from "./ItemView";
import ItemView_Info from "./ItemView_Info";

class ItemListView extends Component {
  state = { visible: true };

  handleShow = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const item_class = this.props.item_class;
    const filtered = this.props.ItemList.filter(
      (Item) => Item.class === item_class
    );

    // popup trigger item list
    const itemList = filtered.map((item) => {
      return <ItemView_Info key={item.id} item={item} />;
    });

    return (
      <div id="subscription item id">
        <div className="sub_img" onClick={this.handleShow}>
          <img className="back" src={`/main_images/sub${item_class}.png`} />
          <div className="sub_text"></div>
          <h1>구독 상품 {item_class}</h1>
          {/* <div className={`sub_dsc ${item_class}`}>
            <h1>아직 어린 친구들을 위한 구성품</h1>
            <h3>호불호 없는 무난한 아이템으로 행복한 시간을 선물해주세요.</h3>
          </div>
          <div className={`sub_dsc ${item_class}`}>
            <h3>아직 어린 친구들을 위한 구성품</h3>
            <h3>호불호 없는 무난한 아이템으로 행복한 시간을 선물해주세요.</h3>
          </div>
          <div className={`sub_dsc ${item_class}`}>
            <h3>아직 어린 친구들을 위한 구성품</h3>
            <h3>호불호 없는 무난한 아이템으로 행복한 시간을 선물해주세요.</h3>
          </div> */}
        </div>

        <div className={this.state.visible === true ? "hide" : "show"}>
          <div className="sub_wrap">{itemList}</div>
        </div>
      </div>
    );
  }
}

export default ItemListView;
