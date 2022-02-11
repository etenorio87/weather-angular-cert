import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../../core/services/location.service';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  zipCodes: string[] = [];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.zipCodes$.subscribe( result => this.zipCodes = result );
  }

  onZipcodeRemove(code: string): void {
    this.locationService.removeZipCode(code);
  }
}
