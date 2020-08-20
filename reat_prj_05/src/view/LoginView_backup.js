import React, { Component } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import "./LoginView.css";

import "./DIY_item";
class LoginView extends Component {
  state = { visible1: true, visible2: true };

  changeView = (e) => {
    if (this.state.visible1) this.setState({ visible1: !this.state.visible1 });
    else if (this.state.visible1 === false)
      this.setState({ visible2: !this.state.visible2 });
  };

  scrollView = (e) => {
    const menuHeight = document.querySelector(".header_menu");
    if (e.value === document.getElementById("menu-01").value) {
      const location = document.querySelector("#menu-01").offsetTop; //해당 id를 갖는 요소의 top 위치(마진 값까지 포함)를 가져올 수 있다.
      window.scrollTo({
        //직접 태그의 위치로 스크롤이동
        top: location - menuHeight,
        behavior: "smooth",
      });
    }
    if (e.value === document.getElementById("menu-02").value) {
      const location = document.querySelector("#sub_img id").offsetTop; //해당 id를 갖는 요소의 top 위치(마진 값까지 포함)를 가져올 수 있다.
      window.scrollTo({
        //직접 태그의 위치로 스크롤이동
        top: location - menuHeight,
        behavior: "smooth",
      });
    }
    if (e.value === document.getElementById("menu-03").value) {
      const location = document.querySelector("#menu-03").offsetTop; //해당 id를 갖는 요소의 top 위치(마진 값까지 포함)를 가져올 수 있다.
      window.scrollTo({
        //직접 태그의 위치로 스크롤이동
        top: location - menuHeight,
        behavior: "smooth",
      });
    }
    if (e.value === document.getElementById("menu-04").value) {
      const location = document.querySelector("#menu-04").offsetTop; //해당 id를 갖는 요소의 top 위치(마진 값까지 포함)를 가져올 수 있다.
      window.scrollTo({
        //직접 태그의 위치로 smooth하게 스크롤이동
        top: location - menuHeight,
        behavior: "smooth",
      });
    }
  };

  render() {
    const users = this.props.users;

    const rootUser = {
      id: users[0].id,
      pw: users[0].password,
    };

    return (
      <div className="header">
        <div>
          {console.log(rootUser)}
          {this.state.visible1 && (
            <Button onClick={this.changeView}>로그인</Button>
          )}

          {!this.state.visible1 && this.state.visible2 && (
            <div>
              <div>
                <Input type="text" id="userid" placeholder="아이디" />

                <Input type="password" id="password" placeholder="비밀번호" />
              </div>

              <Button
                id="btn"
                onClick={(id) => {
                  if (rootUser.id !== document.getElementById("userid").value) {
                    alert("아이디가 틀렸습니다.");
                  }

                  if (
                    rootUser.pw !== document.getElementById("password").value
                  ) {
                    alert("비밀번호가 틀렸습니다");
                  }

                  if (
                    rootUser.pw === document.getElementById("password").value &&
                    rootUser.id === document.getElementById("userid").value
                  ) {
                    this.changeView();
                    alert("로그인 되었습니다!");
                  }
                }}
              >
                로그인
              </Button>
            </div>
          )}

          {!this.state.visible2 && (
            <div className="welcome"> 박민재님 안녕하세요!</div>
          )}
        </div>
        <div class="header_content">
          <div class="header_menu">
            <nav>
              <a href="#" id="menu-01" onClick="">
                <span>구독상품</span>
              </a>
              <a href="#" id="menu-02" onClick="">
                <span>나만의 상품보기</span>
              </a>
              <a href="#" id="menu-03" onClick="">
                <span>전체 상품보기</span>
              </a>
              <a href="#" id="menu-04" onClick="">
                <span>상단으로</span>
              </a>
            </nav>
          </div>

          <div class="section-01 scroll"></div>

          <div class="section-02 scroll"></div>

          <div class="section-03 scroll"></div>

          <div class="section-04 scroll"></div>
        </div>
      </div>
    );
  }
}

export default LoginView;
