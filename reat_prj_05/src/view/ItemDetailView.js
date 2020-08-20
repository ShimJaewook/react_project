import React, { Component } from "react"
import { Button, Icon, Image, Item, Label, Divider, Header, Modal } from "semantic-ui-react"
import "./ItemDetailView.css"
import ItemStore from "../store/MainImageStore"
import "./ItemView.css"
import "./ItemView.scss"

class ItemDetailView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    // const {item} = this.props;

    return (
      <Modal
        className="modal"
        onClose={() => this.setState({ open: false })}
        onOpen={() => this.setState({ open: true })}
        open={this.state.open}
        trigger={<Button className="btn">🔎</Button>}
      >
        <Modal.Content scrolling className="detail-content">
          <Image size="large" src={this.props.item.detailUrl} wrapped />
        </Modal.Content>
      </Modal>
    )
  }
}

export default ItemDetailView
