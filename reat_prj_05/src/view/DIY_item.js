import React, { Component } from "react";
import "./ItemView.css";

class DIY_item extends Component {
  render() {
    return (
      <div>
        <div className="sub_img" id="sub_img id" onClick={this.handleShow}>
          <h1>나만의 상품 만들기</h1>
        </div>
      </div>
    );
  }
}

export default DIY_item;
