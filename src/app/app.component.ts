import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private appService: AppService) {

  }

  data: any;

  ngOnInit() {
    this.appService.getAPI().subscribe(data => {
       this.data = data;
    })
  }

}
