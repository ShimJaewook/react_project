import React, { Component } from "react"
import "./ItemView.css"
import "./ItemView.scss"
import { Button, Icon, Image, Item, Label, Divider, Header, Modal } from "semantic-ui-react"
import "./ItemDetailView.css"
import ItemStore from "../store/MainImageStore"

class ItemView_Info extends Component {
  state = { open: false, mouse: true }
  render() {
    const { item } = this.props

    return (
      <div className="img_wrap">
        <dlv className="ul">
          <Modal
            className="modal"
            onClose={() => this.setState({ open: false })}
            onOpen={() => this.setState({ open: true })}
            open={this.state.open}
            trigger={
              <div>
                <div className="sub_item_info">
                  <h3>{item.name}</h3>
                </div>
                <img className="info_imgs" src={item.imgUrl} width="200px" height="200px" />
              </div>
            }
          >
            <Modal.Content scrolling className="detail-content">
              <Image size="large" src={this.props.item.detailUrl} wrapped />
            </Modal.Content>
          </Modal>
        </dlv>
      </div>
    )
  }
}

export default ItemView_Info
