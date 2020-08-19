import React, { Component } from "react";
import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer_wrap">
        <div className="footer_container">
          <div className="footer_top">
            <div className="logo">
              <img src="/logo_image/LOGO.png"></img>
            </div>
            <h2>멍토피아</h2>
            <span className="menu">
              <h3>
                <a href="#">회사소개</a>
              </h3>
              <h3>
                <a href="#">약관보기</a>
              </h3>
              <h3>
                <a href="#">공지사항</a>
              </h3>
              <h3>
                <a href="#">환불규정</a>
              </h3>
            </span>
          </div>
          <div className="footer_content">
            <h3>© All Rights Reserved.</h3>
            <h3> 주식회사 멍토피아 | 사업자등록번호: 697-77-777777</h3>

            <h4>주소: 서울특별시 강남구 테헤란로 212 501호</h4>
            <h4>이메일: 123@gmail.com</h4>
            <br></br>
            <span>
              대표젼화: 1522-6553 (마케팅 제휴 관련은 이메일을 통해 문의주시기
              바랍니다.)
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
