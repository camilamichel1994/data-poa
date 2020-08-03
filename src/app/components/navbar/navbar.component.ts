import { Component, OnInit } from '@angular/core';
import { faBus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faBus = faBus;
 
  constructor() { }

  ngOnInit(): void {
  }

}
