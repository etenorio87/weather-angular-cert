import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IForecastResult, IWeatherResult} from '../domain/framework';
import { ConstantUtils } from '../utils/ConstantUtils';
import { LocationService } from './location.service';

@Injectable({providedIn: 'root'})
export class WeatherService {
  protected baseUrl = `${ConstantUtils.API_URL}`;

  constructor(protected http: HttpClient,
              protected location: LocationService) {
  }

  public weatherByZipCode(zipCode: string): Observable<IWeatherResult> {
    const countryCode = this.location.country;
    return this.http.get<IWeatherResult>(`${this.baseUrl}weather?zip=${zipCode},${countryCode}&appid=${ConstantUtils.API_KEY}&units=metric`);
  }

  public forecastByZipCode(zipCode: string, days = 5): Observable<IForecastResult> {
    const countryCode = this.location.country;
    return this.http.get<IForecastResult>(`${this.baseUrl}forecast/daily?zip=${zipCode},${countryCode}&cnt=${days}&appid=${ConstantUtils.API_KEY}&units=metric`);
  }
}
