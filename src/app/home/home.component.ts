import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  clicked(){
    alert("you choose the next images")
    this.img = !this.img
  }
  img:boolean = true;
}
