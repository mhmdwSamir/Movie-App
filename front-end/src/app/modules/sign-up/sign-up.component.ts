import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../../@core/CustomValidator/match-password';
import { UniqueUserName } from '../.././@core/CustomValidator/unique-user-name';
import { from } from 'rxjs';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  genders = [
    { label: 'MALE', value: 'male' },
    { label: 'FEMALE', value: 'female' },
    { label: 'OTHER', value: 'other' },
  ];
  signUpForm = new FormGroup(
    {
      name: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern(/^[a-z]|[A-Z]/),
        ],
        [this._uniqueUserName.validate]
      ),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      ConfirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      gender: new FormControl(null, [Validators.required]),
    },
    { validators: [this._matchPassword.validate] }
  );

  constructor(
    private _matchPassword: MatchPassword,
    private _uniqueUserName: UniqueUserName
  ) {}
  ngOnInit(): void {}
  OnSubmit() {
    if (this.signUpForm.valid) {
      const { name, password } = this.signUpForm.value;
    } else {
      this.signUpForm.markAllAsTouched();
      for (const key in this.signUpForm.controls) {
        this.signUpForm.get(key).markAsDirty();
      }
      return;
    }

    // One have User Data To Sign up
  }
  onClickReset() {
    this.signUpForm.reset();
  }
}
