import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  facultys:any[] = [];
  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.get<any>('http://localhost:5000/addfaculty').subscribe(result=>{
      // console.log(JSON.stringify(result));
      // alert(JSON.stringify(result));
      this.facultys = result.doc;
    });
  }

  deleteFaculty(data){
    this.http.delete<any>('http://localhost:5000/addfaculty/delete/' + data , data).subscribe(result=>{
      alert('delete complete!');
    });
  }

}
