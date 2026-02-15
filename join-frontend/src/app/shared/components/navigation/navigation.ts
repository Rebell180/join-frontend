import { Component, output, OutputEmitterRef } from '@angular/core';
import { NavItem } from '../../classes/nav-item';
import { NavType } from '../../enums/navtype';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  navItems: Array<NavItem> = [
    {
      sectionId: 'Summary',
      title: 'Summary',
      imgPath: 'assets/images/contact/Summary.png',
      navType: NavType.SUMMARY,
      active: true
    },
    {
      sectionId: 'add-task-section',
      title: 'Add task',
      imgPath: 'assets/images/contact/addTask.png',
      navType: NavType.ADDTASK,
      active: false,
    },
    {
      sectionId: 'Boards',
      title: 'Boards',
      imgPath: 'assets/images/contact/Board.png',
      navType: NavType.BOARD,
      active: false,
    },
    {
      sectionId: 'Contacts',
      title: 'Contacts',
      imgPath: 'assets/images/contact/Contacts.png',
      navType: NavType.CONTACT,
      active: false
    },
  ]

  selectedSection: OutputEmitterRef<NavType> = output<NavType>();

  constructor() {}

  protected selectSection(index: number) {
    this.navItems.forEach((navItem, i) => {
      navItem.active = false;
      if (i == index) navItem.active = true;
    });
    this.selectedSection.emit(this.navItems[index].navType);
  }

}
