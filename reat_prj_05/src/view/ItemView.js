import React, { Component } from "react"
import ItemDetailView from "./ItemDetailView"
import "./ItemView.css"
import "./ItemView.scss"

class ItemView extends Component {
  state = { mouse: true }
  render() {
    const { item, onAdd_SelectedItem } = this.props

    return (
      <div className="img_wrap">
        <img
          className="sub_imgs"
          src={item.imgUrl}
          width="190px"
          height="200px"
          onMouseEnter={() => this.setState({ mouse: !this.state.mouse })}
        />
        <div className="item_info">
          <h3>{item.name}</h3>
          <h3 className="item_price">{item.price}원</h3>
        </div>

        <div className={this.state.mouse === true ? "float_btn" : "hide"}>
          <dlv className="ul">
            <div>
              <ItemDetailView item={item} />
            </div>
            <div>
                <div className="btn" onClick={() => onAdd_SelectedItem(item)}>
                    <h1>+</h1>
                </div>
            </div>
          </dlv>
        </div>
      </div>
    )
  }
}

export default ItemView
