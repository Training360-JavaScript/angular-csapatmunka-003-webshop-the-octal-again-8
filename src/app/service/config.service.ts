import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'The Octal Guitar Shop';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'Admin', link: '/admin', icon: 'admin'},
    /*{text: 'Category01', link: '/cat01'},
    {text: 'Category02', link: '/cat02'},*/
  ];

  constructor() { }
}
