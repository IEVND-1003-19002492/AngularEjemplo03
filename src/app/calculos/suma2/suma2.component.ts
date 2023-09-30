import { Component } from '@angular/core';

@Component({
  selector: 'app-suma2',
  templateUrl: './suma2.component.html',
  styleUrls: ['./suma2.component.css']
})
export class Suma2Component {
  n1=0;
  n2=0;
  r=0;

  sumar(){
    this.r=this.n1+this.n2;
  }
}
