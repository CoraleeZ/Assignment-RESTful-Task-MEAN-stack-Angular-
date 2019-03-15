import { Component , OnInit} from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  tasks = [];
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getTasksFromService();
  };
  getTasksFromService(){
    let tempObservable=this._httpService.getAllTasks();
    tempObservable.subscribe(data =>{
    console.log("Got all tasks!", data);
    this.tasks = data['tasks'];
  }); 
  }
}
