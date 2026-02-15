import { Component, OnInit, signal } from '@angular/core';
import { Navigation } from "../../shared/components/navigation/navigation";
import { Header } from "../../shared/components/header/header";
import { NavType } from '../../shared/enums/navtype';

@Component({
  selector: 'app-join',
  imports: [Navigation, Header],
  templateUrl: './join.html',
  styleUrl: './join.scss',
})
export class Join implements OnInit {
  protected readonly NavType = NavType;
  protected navType = signal<NavType>(NavType.CONTACT);


  constructor() {}

  ngOnInit(): void {
    // TODO load User from localStorage
    // No user = no login => route to login
  }

  protected currentSection: NavType = NavType.SUMMARY;

  protected changeSection(navType: NavType) {
    this.navType.apply(navType);
    console.log(navType);
  }



} 
