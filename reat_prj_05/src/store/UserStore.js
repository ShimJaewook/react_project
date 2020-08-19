import { observable, action } from "mobx"
import Users from "../user_data"

class UserStore {
  @observable
  users = Users

  @observable
  user = {}

  @observable
  login = false

  //Mobx state를 변경할 함수에 @action 데코레이터를 사용하여 선언
}
export default new UserStore()
