import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  onehero:any=[];

  constructor(private _oneHero:HttpService) {}

  ngOnInit() {
    this.getTasksFromService();
  }

  getTasksFromService(){
    let tempObservable=this._oneHero.getOneTasks('5c898d7128ef79b3a86ff498');
    tempObservable.subscribe(data =>{
      console.log(data);
      this.onehero=data;
    });
  };

}
