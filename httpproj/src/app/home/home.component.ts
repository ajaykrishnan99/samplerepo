import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  data:Array<any>;
  result;
  constructor(private http: HttpClient) {
    this.data=new Array<any>();
   }

 getData(){
  this.http.get("http://localhost:3000/posts")
  .subscribe((data) => {
     console.log("Second Name:"+data[2]['name']);
     console.log("All data"+data);
     this.result=JSON.stringify(data);
    
    }); 
 
 }

}
