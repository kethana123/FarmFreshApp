import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private us: UserService, private router:Router) { }

  ngOnInit(): void {
  }
  userFlag = false;

  onSubmit(formRef){
    let userObj=formRef.value;
    //console.log(userObj);
    if(formRef.valid){
      this.us.createUser(userObj).subscribe(
        res=>{
        if(res["message"]=="New User Added"){
          alert("New user Created Succesfully")
          this.router.navigateByUrl("/login")
        }
        else{
          alert("User name already present")
          formRef.reset();
        }
        }
      )
    }
  }

  checkForUser(userName) {
    let value = {
      userName: String,
    };
    value.userName = userName;

    this.us.checkUser(value).subscribe((res) => {
      if (res['message'] == 'Username already present') {
        this.userFlag = true;
      } else {
        this.userFlag = false;
      }
    });
  }

}
