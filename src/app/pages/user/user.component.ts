import { Component, OnInit } from '@angular/core';
import { Persona } from 'app/interfaces/persona.interface';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{

    persona: Persona ={
        id: 1,nombre: "Alejandra",
        apellidos: "Cortes",
        username: "jakaleja",
        dni: "58963214G",
        telefono: 6359874612,
        sexo:"Mujer"}; 
        
    ngOnInit(){
    }
}
