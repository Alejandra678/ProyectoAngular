import { Component } from '@angular/core';
import { Entreno } from 'app/interfaces/entreno.interface';

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'icons.component.html'
})

export class IconsComponent{

    entrenos: Entreno[] =[
        {dia : "Lunes",
        musculo : "Cuadriceps",
        recomendacion : "Concentacion muscular constante"},
        {dia : "Martes",
        musculo : "Espalda, bicep",
        recomendacion : "Cuidar el RM en DF"},
        {dia : "Miercoles",
        musculo : "Pecho, tricep",
        recomendacion : "Mantener el trabajo sin forzar el hombro"},
        {dia : "Jueves",
        musculo : "Femoral, Hombro",
        recomendacion : "Concentacion muscular constante"},
        {dia : "Viernes",
        musculo : "Espalada",
        recomendacion : "Cuidar el RM en el DF"},
        {dia : "Sabado",
        musculo : "Gluteo",
        recomendacion : "Cuidar la lumbar"},
    ]; 
}
