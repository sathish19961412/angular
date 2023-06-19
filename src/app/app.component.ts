import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name:string="sathish";
 username:string="sathish@1412199";
 City:string="Coimbatore";
 age:number=26;
 age1:number=27;
 isdisabled:boolean=false;

 getCity(){
    return "Coimbatore"
 }
 changeName(){
   this.username="sathish@1412";
 }
 change(event:Event){
    this.username=(<HTMLInputElement>event.target).value;
 }
}
