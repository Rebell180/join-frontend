import { NavType } from "../enums/navtype";

export interface INavItem {
    sectionId: string,
    title: string,
    imgPath: string,
    navType: NavType,
    active: boolean
}