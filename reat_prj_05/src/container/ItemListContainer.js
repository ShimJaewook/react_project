import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ItemListView from "../view/ItemListView";
import DIY_item from "../view/DIY_item";
import "./ItemListContainer.scss";
import { Button } from "semantic-ui-react";
import MiddleContentContainer from "./MiddleContentContainer";

@inject("ItemStore")
@observer
class ItemListContainer extends Component {
  //클릭함수 구현

  render() {
    const { items } = this.props.ItemStore;

    return (
        <div>
          <div id="subscription_point" />
          <div className="sub_header">
            <div className="sub_content">
              <div className="text">
                <h3> 매월 수의사들이 선택한 상품이 우리집으로</h3>

                <div className="button_wrap">
                  <h1>정기구독 상품</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="header_imgs">
            <img src="/main_images/header_img1.png"></img>
            <img src="/main_images/header_img2.png"></img>
          </div>
          <MiddleContentContainer />

          <div className="sub_bottom">
            <ItemListView ItemList={items} item_class="A" />
            <ItemListView ItemList={items} item_class="B" />
            <ItemListView ItemList={items} item_class="C" />
            {/* <DIY_item /> */}

            <div className="btn">
              <Button inverted color="orange">
                정기구독 시작하기
              </Button>
            </div>
          </div>
        </div>
    );
  }
}

export default ItemListContainer;
