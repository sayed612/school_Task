import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  
  constructor(private httpClient: HttpClient) { }

  doGet(){
    return this.httpClient.get<any>(`https://reqres.in/api/users` , {params:{page:'1', per_page:'12'}})
  }
  getS(taskid:number){
    return this.httpClient.get<any>(`https://reqres.in/api/users/${taskid}`)
    
  }


}
