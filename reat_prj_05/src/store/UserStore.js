import { observable, action } from "mobx"
import { inject, observer } from "mobx-react"
import Users from "../user_data"

class UserStore {
  @observable
  users = Users

  @observable
  user = {}

  @observable
  login = false

  @action
  loginCheck(price) {
    if (price == 0) {
      alert("상품을 등록해주세요")
    } else if (this.login) {
      switch (price) {
        case "A":
          alert("19000원 결제가 완료되었습니다.")
          break
        case "B":
          alert("29900원 결제가 완료되었습니다.")
          break
        case "C":
          alert("39300원 결제가 완료되었습니다.")
          break
        default:
          alert(price + "원 결제가 완료되었습니다.")
      }
    } else alert("로그인 후에 다시 결제해주세요")
  }

  @action
  changeLogin() {
    this.login = !this.login
    // console.log(this.login)
  }

  //Mobx state를 변경할 함수에 @action 데코레이터를 사용하여 선언
}
export default new UserStore()
