import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import ItemListView from "../view/ItemListView"
import DIY_item from "../view/DIY_item"
import "./ItemListContainer.scss"
import { Button } from "semantic-ui-react"
import MiddleContentContainer from "./MiddleContentContainer"

@inject("ItemStore")
@inject("StateStore", "UserStore")
@observer
class ItemListContainer extends Component {
  onLoginCheck = (e) => {
    this.props.UserStore.loginCheck(e)
  }

  changeState = (state) => {
    this.props.StateStore.setState(state)
  }

  render() {
    const { items } = this.props.ItemStore

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

          <div className='sub_bottom_title'> 
          
          <span> <img color='white' src="/logo_image/LOGO.png" ></img> <h1>멍토피아 구독상품 알아보기</h1></span></div>
          <ItemListView ItemList={items} item_class="A" onLoginCheck={this.onLoginCheck} />
          <ItemListView ItemList={items} item_class="B" onLoginCheck={this.onLoginCheck} />
          <ItemListView ItemList={items} item_class="C" onLoginCheck={this.onLoginCheck} />

          <div className="sub_bottom_wrap">
            <div className="btn_txt">
              <h3>구독 상품을 직접 선택할 수도 있습니다.</h3>
              <h3>사랑하는 반려동물을 위해 원하는 아이템을 선택해보세요.</h3>
            </div>
            <div className="btn">
              <a href="#">
                <Button onClick={() => this.changeState("allItem")} inverted color="orange">
                  나만의 상품으로 구독하기
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemListContainer
