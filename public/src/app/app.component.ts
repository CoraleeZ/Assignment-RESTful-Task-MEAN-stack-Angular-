import { Component , OnInit} from '@angular/core';
import { HttpService } from './http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  heros:any=[];
    
  constructor(private _allHero: HttpService){}

  ngOnInit(){
    this.getTasksFromService();
  };

  getTasksFromService(){
    let tempObservable=this._allHero.getAllTasks();
    tempObservable.subscribe(data =>{
      console.log(data);
      this.heros=data;
    });
  };
}
