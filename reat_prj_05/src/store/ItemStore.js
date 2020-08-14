import { observable, action } from "mobx";
import Items from "../item_data";

class ItemStore {
  @observable
  items = Items;

  @observable
  item = {};

  //   @observable
  //   value = true;

  //   @action
  //   changeVal = () => {
  //     this.value = !this.value;
  //   };
  //   showDscr = (value) => {
  //     this.value = !value;
  //   };
}
export default new ItemStore();
