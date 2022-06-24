import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/aprende',     title: 'Aprende',         icon:'nc-book-bookmark',       class: '' },
    { path: '/icons',         title: 'Practica',             icon:'nc-glasses-2',    class: '' },
    { path: '/maps',          title: 'Empleos',              icon:'nc-pin-3',      class: '' },
    { path: '/notifications', title: 'Certificado',     icon:'nc-hat-3',    class: '' },
    { path: '/user',          title: 'Perfil',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Foro',        icon:'nc-tile-56',    class: '' },
   
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
