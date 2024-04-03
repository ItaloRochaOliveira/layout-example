import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  
  items: NbMenuItem[] = [

    {
      title: 'Página Inicial',
      icon: 'home-outline',
      link: '/',
    },
    {
      title: 'tasks',
      link: "task"
    },


  ];
  
  items2 = [
    { title: 'Logout' },
  ];

  ngOnInit() {
  }

}
