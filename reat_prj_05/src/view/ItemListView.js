import React, { Component } from "react"
// import ItemView from "./ItemView";
import ItemView_Info from "./ItemView_Info"
import "./ItemListView.scss"
class ItemListView extends Component {
  state = { visible: true }

  handleShow = () => {
    this.setState({ visible: !this.state.visible })
  }


  

  render() {
    const item_class = this.props.item_class
    const filtered = this.props.ItemList.filter((Item) => Item.class === item_class)
    const text1 = ['어린이 세트',"19,900원", "❤아직 어린 성장기 친구들을 위한, 어린이 세트❤"]
    const text2 = [' 튼튼이 세트',"29,900원", "🐯활동량이 많은 우리 아이를 위해! 튼튼이 세트🐻"]
    const text3 = ['영양케어 세트',"39,900원", "🍠영양가가 중요한 친구들을 위해! 영양케어 세트💖"]

    // popup trigger item list
    const itemList = filtered.map((item) => {
      return <ItemView_Info key={item.id} item={item} />
    })

    return (
      <div id="subscription item id">
        <div className="sub_img" onClick={this.handleShow}>
          <img className="back" src={`/main_images/sub${item_class}.png`} />
          <div className="sub_text">
            <span>
              <h1>{item_class == "A" ? text1[0] : item_class == "B" ? text2[0] : text3[0]} </h1></span>
          
          </div>
        
        </div>

        <div className={this.state.visible === true ? "hide" : "show"}>
          <div className="sub_wrap">
            {itemList}

            <div className="txt_box">
              <h3>{item_class == "A" ? text1[2] : item_class == "B" ? text2[2] : text3[2]}</h3>

              <span className="btn_sec">
                <h1>{item_class == "A" ? text1[1] : item_class == "B" ? text2[1] : text3[1]}</h1>
                <button className="txt_btn" onClick={() => this.props.onLoginCheck(item_class)}>
        
                  <h3>구독하기</h3>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemListView
