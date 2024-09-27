import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  formSignup!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.formSignup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  signup() {
    if (this.formSignup.invalid) {
      return
    }
    const formValues = this.formSignup.value;
    this.authService.registerUser(formValues).subscribe({
      next: (res: any) => {
        console.log('success');
        this.formSignup.reset();
        this.router.navigateByUrl('/sign-in');
      },
      error: (err: any) => { console.log(err) }
    })
  }
}
