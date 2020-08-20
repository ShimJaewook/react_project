import React, { Component } from "react";
import "./Sub_header.scss";

class Sub_header extends Component {
  render() {
    return (
      <div>
        <div className="subheader">
          <h1>나만의 구독상품 만들기</h1>
          <div className="header_content">
            <h3>우리 댕댕이를 위해 해주고 싶은건 다 있다. </h3>
            <h3>원하는 대로 골라서 나만의 패키지를 만들어보세요. </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Sub_header;
