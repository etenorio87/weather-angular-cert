import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WeatherService} from '../../../core/services/weather.service';
import {IForecastResult} from '../../../core/domain/framework';
import {IconUtil} from '../../../core/utils/IconUtil';
import {ConstantUtils} from '../../../core/utils/ConstantUtils';

@Component({
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  data: IForecastResult;
  fail = false;
  loading = true;

  constructor(protected activatedRoute: ActivatedRoute,
              protected service: WeatherService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('zipCode')) {
        this.loadZipCodeForecast(params.get('zipCode'));
      }
    });
  }

  imageUrl(code: number): string {
    const icon = IconUtil.getIconByWeatherCode(code);
    return `${ConstantUtils.ICON_URL}/${icon}.png`;
  }

  private loadZipCodeForecast(zipCode: string): void {
    this.service.forecastByZipCode(zipCode).subscribe(
        result => this.data = result,
        error => {
          this.fail = true;
          this.loading = false;
        },
        () => this.loading = false
    );
  }
}
