import {Component, OnInit} from '@angular/core';
import { LocationService } from '../../../core/services/location.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {IFormValue} from '../../../core/domain/framework';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit {
  locationForm: FormGroup;
  selectedCountry: string;

  constructor(private service: LocationService) {
    this.initForm();
    this.selectedCountry = this.service.country;
  }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    const value: IFormValue = this.locationForm.value;
    this.locationForm.reset();
    this.service.addZipCode(value.zipCode);
  }

  onCountryChange(value): void {
    this.service.setCountry(value);
  }

  private initForm(): void {
    this.locationForm  =  new FormGroup({
      zipCode: new FormControl (null, Validators.required)
    });
  }
}
