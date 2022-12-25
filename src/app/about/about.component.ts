import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private router: Router){

  }
  navigate(){
    this.router.navigateByUrl('/homepage');

  }

}
