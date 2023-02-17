import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-unit-testing';
  size = new FormControl();
  entries: number[] = [];

  constructor(){
  }

  save(value:number){
    //console.log({value});
    this.entries.push(value);
    //console.log(this.entries);
  }
}
