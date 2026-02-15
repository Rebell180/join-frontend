import { NavType } from "../enums/navtype"
import { INavItem } from "../interfaces/INavItem";

export class NavItem implements INavItem {
    sectionId: string = '';
    title: string = '';
    imgPath: string = '';
    navType: NavType = NavType.SUMMARY;
    active: boolean = false;

    constructor (data?: INavItem) {
        if(data) {
            this.sectionId = data.sectionId;
            this.title = data.title;
            this.imgPath = data.imgPath;
            this.navType = data.navType;
            this.active = data.active;
        }
    }

}