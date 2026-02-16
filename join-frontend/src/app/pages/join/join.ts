import { Component, OnInit, signal } from '@angular/core';
import { Navigation } from "../../shared/components/navigation/navigation";
import { Header } from "../../shared/components/header/header";
import { NavType } from '../../shared/enums/navtype';
import { Contacts } from "../../shared/components/contacts/contacts";
import { Addtask } from "../../shared/components/addtask/addtask";
import { Board } from "../../shared/components/board/board";
import { Summary } from "../../shared/components/summary/summary";

@Component({
  selector: 'app-join',
  imports: [Navigation, Header, Contacts, Addtask, Board, Summary],
  templateUrl: './join.html',
  styleUrl: './join.scss',
})
export class Join implements OnInit {
  protected readonly NavType = NavType;
  navType = signal<NavType>(NavType.CONTACT);


  constructor() {}

  ngOnInit(): void {
    // TODO load User from localStorage
    // No user = no login => route to login
  }

  protected currentSection: NavType = NavType.SUMMARY;

  protected changeSection(navType: NavType) {
    this.navType.set(navType);
    console.log(navType);
  }



} 
