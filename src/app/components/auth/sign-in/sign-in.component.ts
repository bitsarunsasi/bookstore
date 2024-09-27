import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  formSignIn!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.formSignIn = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  signIn() {
    if (this.formSignIn.invalid) {
      return
    }
    const formValue = this.formSignIn.value;
    this.authService.signIn().subscribe({
      next: (res: any) => {
        const user = res.find((data: any) => {
          return data.email === formValue.email && data.password === formValue.password
        });
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          this.formSignIn.reset();
          this.router.navigateByUrl('');
        } else {
          alert('user not found');
          this.formSignIn.reset();
        }
      },
      error: (err: any) => { console.log('Something went wrong') }
    })
  }
}
