import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService, GoogleLoginProvider } from 'angular4-social-login';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { EmployeeService} from '../employee.service'
@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.css']
})
export class GoogleAuthComponent implements OnInit {

  message:any;

  ngOnInit() {
  }
  form: FormGroup = new FormGroup({});
  user: any;
  constructor(private _socioAuthServ: AuthService,private router:Router, private service:EmployeeService) { }

 /*singIn(platform : string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + " logged in user data is= " , response);
        this.user = response;
        this.router.navigateByUrl('/add-task');
      }
    );
  }*/

 singIn(platform : string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then(
      (employee) => {
       console.log(platform + " logged in employee data is= " , employee);
        this.user = employee;
        let response =   this.service.AuthenticateEmployee(this.user.email);
        response.subscribe(data => {
           this.message = data;
           if(this.message)
           {
        this.router.navigateByUrl('/add-task');
          }
        })
      });
    }

  addtask(){
  this.router.navigateByUrl('/add-task');
  }

  
  signOut(): void {
    this._socioAuthServ.signOut();
    this.user = null;
    console.log('User signed out.');
  }

}
