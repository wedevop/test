import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
 show :any;
 msg:any;
name: any;

   constructor(private router: Router){
this.show=false;
this.msg="this is variable";

}
navigate(){
  // this.router.navigateByUrl('/about');
this.show=true;
}
}
