import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/services/getdata.service';
import { Posts } from 'src/app/interfaces/posts.interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  post :Posts[] = []  
  totalRecords :number
  page :number = 1
  recPerPage :number = 6
  constructor(private GDservices: GetdataService) { 
    
  }

  ngOnInit(): void {
    this.doGet()
  }
  doGet(){
    this.GDservices.doGet().subscribe((res) => {
      this.post = res.data
      this.totalRecords = res.data.length
      
    })
  }


  inc(){
    if(this.recPerPage < this.totalRecords){
      this.recPerPage +=1
    }
    
  }
  dec(){
    if (this.recPerPage > 1){
      this.recPerPage -=1
    }
  }

}
