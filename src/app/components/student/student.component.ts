import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/services/getdata.service';
import { ActivatedRoute } from '@angular/router';
import { Stds } from 'src/app/interfaces/std.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  taskid:any
  std :Stds[] =[]
  constructor(private GDservices: GetdataService , private route :ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.getstd(this.taskid)
  }

  getstd(taskid:number){
    this.taskid=this.route.snapshot.paramMap.get('id')
    this.GDservices.getS(this.taskid).subscribe(res => {
      this.std = res.data
    })
  }


}
