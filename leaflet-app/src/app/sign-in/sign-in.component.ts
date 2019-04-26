import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LyTheme2, shadowBuilder, ThemeVariables } from '@alyle/ui';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const STYLES = (theme: ThemeVariables) => ({
  container: {
    padding: '16px',
    textAlign: 'center',
    background: 'white',
    boxShadow: shadowBuilder(1),
    borderRadius: '0 30px 30px 0',
    height: '100%'
  }
});

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(STYLES);
  createAccount = "If you don't have account please go to the";
  registrationPage = "Registration page";
  back = "Back to Menu";

  profileForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(16)
    ]),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.profileForm.get('username')!;
  }

  constructor(private theme: LyTheme2) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
