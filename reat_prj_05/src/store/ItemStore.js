import { observable, action, toJS } from "mobx";
import Items from "../item_data";

class ItemStore {
  @observable
  items = Items;

  @observable
  item = Items;

<<<<<<< HEAD
  @observable
  label = "all";

  @observable
  selectItems = [];

=======
>>>>>>> ffb6a0bf2807f18d7f4c33954798fa63de34fdc9
  @action
  filterItem(value) {
    this.item = this.item.filter((element) => element.category !== value);
  }

  @action
<<<<<<< HEAD
  changeLabel(value) {
    const label = this.value;
    this.setState({ label: value });
  }
  @action
=======
>>>>>>> ffb6a0bf2807f18d7f4c33954798fa63de34fdc9
  selectItem(label) {
    this.item = this.items.filter((ele) => ele.category === label);
  }

  @action
  addItem(value) {
    const item = Items.filter((element) => element.category === value);
    this.item = this.item.concat(item);
  }

  @action
  add_SelectedItem(ele) {
    this.selectItems = this.selectItems.concat(ele);
    this.selectItems = toJS(this.selectItems);
    //toJS로 Json 형태로 파싱해오기
  }
}
export default new ItemStore();
