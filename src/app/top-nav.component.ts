import { Component } from '@angular/core';

class TopNavMenu {
    text: string;
    url: string;
}

const MENUS: TopNavMenu[] = [
  { text: 'Hoteles', url: '/hoteles' },
  { text: 'Vuelos', url: '/vuelos' },
  { text: 'Vuelo + Hotel', url: '/vuelo+hotel' },
  { text: 'Paquetes', url: '/paquetes' },
  { text: 'Disney', url: '/disney' },
  { text: 'Escapadas', url: '/escapadas' },
  { text: 'Seguros', url: '/seguros' },
  { text: 'Autos', url: '/autos' },
  { text: 'Cruceros', url: '/cruceros' },
  { text: 'OFERTAS', url: '/ofertas' },
  { text: 'Más', url: '/mas' }
];

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  menus = MENUS;
}
