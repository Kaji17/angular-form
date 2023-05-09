import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { user } from './shared/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;

  public user: user = new user();

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      email :  new FormControl(),
      sendCatalog: new FormControl(true)
    })

  }

  public saveData(): void {
    console.log(this.registerForm);
    console.log("value: ", JSON.stringify(this.registerForm.value));
  }

}
