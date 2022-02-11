import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IWeatherResult} from '../../../core/domain/framework';
import {WeatherService} from '../../../core/services/weather.service';
import {ConstantUtils} from '../../../core/utils/ConstantUtils';
import {IconUtil} from '../../../core/utils/IconUtil';

@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.css']
})
export class WeatherResultComponent implements OnInit {
  @Input() zipCode: string
  data: IWeatherResult;

  loading = true;
  fail = false;

  @Output() onRemove = new EventEmitter<string>();

  constructor(private service: WeatherService) {
  }

  ngOnInit(): void {
    this.service.weatherByZipCode(this.zipCode).subscribe(
        result => this.data = result,
        error => {
          this.fail = true;
          this.loading = false;
        },
        () => this.loading = false
    );

  }

  removeZipCode(): void {
    this.onRemove.emit(this.zipCode);
  }

  imageUrl(code: number): string {
    const icon = IconUtil.getIconByWeatherCode(code);
    return `${ConstantUtils.ICON_URL}/${icon}.png`;
  }

  imageUrl2(icon: string, scale = 0): string {
    const sufix = scale === 0 ? '' : `@${scale}x`;
    return `${ConstantUtils.ICON_URL2}/${icon}${sufix}.png`;
  }

}
