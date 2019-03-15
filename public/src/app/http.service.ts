import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getAllTasks();
  }
  getAllTasks(){
      return this._http.get('/api/tasks');
    };
  getOneTasks(id:any){
      return this._http.get('/api/tasks/'+id);
    };
    
}
