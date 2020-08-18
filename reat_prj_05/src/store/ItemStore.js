import { observable, action } from "mobx"
import Items from "../item_data"

class ItemStore {
  @observable
  items = Items

  @observable
  item = Items

  @action
  filterItem(value) {
    this.item = this.item.filter((element) => element.category !== value)
  }

  @action
  selectItem(label) {
    this.item = this.items.filter((ele) => ele.category === label)
  }

  @action
  addItem(value) {
    const item = Items.filter((element) => element.category === value)
    this.item = this.item.concat(item)
  }
}
export default new ItemStore()
