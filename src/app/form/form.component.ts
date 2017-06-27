import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISubscription } from 'rxjs/Subscription';


@Component({
  selector   : 'app-form',
  templateUrl: './form.component.html',
  styleUrls  : ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  licenceNumberPattern: any = /^\d{2}-\d{3}-\d{2}$/g;
  descMaxLength             = 10;
  currentYear: number       = new Date().getFullYear();
  carForm: FormGroup;
  subscription: ISubscription;

  formErrors: any = {
    licenceNumber: [],
    description  : [],
    year         : [],
    color        : []
  };

  colors: any = [
    {
      value  : 'white',
      display: 'White'
    },
    {
      value  : 'black',
      display: 'Black'
    },
    {
      value  : 'green',
      display: 'Green'
    }
  ];

  validationsMessages: any = {
    licenceNumber: {
      required: 'Licence plate field is required',
      pattern : 'The licence plate number must match the pattern: XX-XXX-XX'
    },
    description  : {
      required : 'Description field is required',
      maxlength: `Maximum characters is ${this.descMaxLength}`
    },
    year         : {
      required: 'Year field is required',
      max     : `Maximum year value can be ${this.currentYear}`
    },
    color        : {
      required: 'Color field is required'
    }
  };

  constructor(private builder: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.carForm = this.builder.group({
      licenceNumber: ['', [
        Validators.required,
        Validators.pattern(this.licenceNumberPattern)
      ]],
      description  : ['', [
        Validators.required,
        Validators.maxLength(this.descMaxLength)
      ]],
      year         : [null, [
        Validators.required,
        Validators.max(this.currentYear)
      ]],
      isElectric   : [null],
      isSafe       : [null],
      color        : ['', Validators.required]
    });

    this.subscription = this.carForm.valueChanges
      .subscribe(() => this.onValueChanged());
  }

  onValueChanged() {
    for (const field in this.formErrors) {

      if (!this.formErrors.hasOwnProperty(field)) continue;

      this.formErrors[field] = [];

      const control  = this.carForm.get(field);
      const messages = this.validationsMessages[field];

      for (const key in control.errors) {

        if (!control.errors.hasOwnProperty(key)) continue;

        this.formErrors[field].push(messages[key]);
      }
    }
  }

  submit(data) {
    console.log('data: ', data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
