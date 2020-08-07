import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:Array<any>;
  constructor(private http: HttpClient) {
    this.data=new Array<any>();
   }
  name;
  result;
  ngOnInit() {
    
 }
  postData(){
    
    // let url="http://www.httpbin.org/forms/post"; doesnt work 
    // create a json server with command "npm start server"  and give the link in url
    let url="http://localhost:3000/posts";
    
this.http.post(url,{name:this.name}).toPromise().then((data:any)=>{alert("Submitted");
  
})
  }
  

  }
  

