import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[] = ['SpiderMan','IronMan','Hulk','Thor', 'Capitan America'];

  heroeBorrado:string  = '';

  borrarHeroe(){
    // const heroeBorrado =  this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || "";
  }


}
