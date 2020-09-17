import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AltertifyService } from '../_services/altertify.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;

  constructor(private authService: AuthService, private alertify: AltertifyService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('Hello', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      confirmPassowrd: new FormControl('', Validators.required)
    });
  }

  register() {
    // this.authService.register(this.model).subscribe(() => {
    //   this.alertify.success('registation successful');
    // }, error => {
    //   this.alertify.error(error);
    // });
    console.log(this.registerForm.value);
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.message('canceled');
  }
}
