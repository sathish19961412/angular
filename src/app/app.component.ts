import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 btnDisable:boolean=true;
 name!:string;
 username:string="sathish@1412199";
 City:string="Coimbatore";
 age:number=26;
 age1:number=27;
 isdisabled:boolean=true;
 text:string="No name is added";


 constructor(){
   setTimeout(()=>{
    this.btnDisable=false;
   },3000)
 }
 getCity(){
    return "Coimbatore"
 }
 changeName(){
    this.username="sathish@1412";
 }
 change(event:Event){
    this.username=(<HTMLInputElement>event.target).value;
 }
 addName(){
    this.text=" Your name is " + " " + this.name;
 }
}
