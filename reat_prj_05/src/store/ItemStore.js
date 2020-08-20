import { observable, action, toJS } from "mobx"
import Items from "../item_data"

class ItemStore {
  @observable
  items = Items

  @observable
  item = Items

  @observable
  label = "all"

  @observable
  selectItems = []

  @observable
  total_price = 0

  @action
  filterItem(value) {
    this.item = this.item.filter((element) => element.category !== value)
    this.item = this.item.sort(function (a, b) {
      return a.id - b.id
    })
  }

  @action
  addItem(value) {
    const item = Items.filter((element) => element.category === value)
    this.item = this.item.concat(item)
    this.item = this.item.sort(function (a, b) {
      return a.id - b.id
    })
  }

  @action
  add_SelectedItem(ele) {
    if (this.selectItems.indexOf(ele) == -1) {
      this.selectItems = this.selectItems.concat(ele)
      this.total_price = this.total_price + ele.price
      ele.quantity = 1
      alert("상품이 추가되었습니다!");
    }

    // this.selectItems = toJS(this.selectItems);
    //toJS로 Json 형태로 파싱해오기
  }

  @action
  addPrice(e) {
    this.total_price = this.total_price + e.price
    e.quantity = e.quantity + 1
  }

  @action
  reducePrice(e) {
    this.total_price = this.total_price - e.price
    e.quantity = e.quantity - 1
  }

  @action
  removeItem(e) {
    this.selectItems = this.selectItems.filter((element) => element.id !== e.id)
  }
}
export default new ItemStore()
