import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_website';

  constructor(private route:Router){
  }
  openPage(s:string):void{
    this.route.navigate(['/'+s]);
  }
}
