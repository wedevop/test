import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'togglewidget',
  templateUrl: './togglewidget.html',
  styleUrls: ['./togglewidget.css']
})
export class togglewidgetComponent{
  @Output() toggledclick= new EventEmitter<any>();
  // changed(event:any){
  // this.toggledclick.emit(event)
  // }
  constructor(){

  }
}
