import { observable, action } from "mobx";
import MainImages from "../mainImage_data";

class MainImageStore {
    @observable
    mainImages = MainImages;

    @observable
    mainImage = {};
}

export default new MainImageStore();