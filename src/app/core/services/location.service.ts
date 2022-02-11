import {Injectable} from '@angular/core';
import {ConstantUtils} from '../utils/ConstantUtils';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class LocationService {
  private zipCodes: string[];
  private _country: string;

  private zipCodesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public zipCodes$: Observable<string[]> = this.zipCodesSubject.asObservable();

  constructor() {
    this.loadZipCodes();
  }

  get country(): string {
    return this._country;
  }

  public setCountry(code: string): void {
    if (code !== this._country) {
      this.zipCodes = [];
      this._country = code;
      localStorage.setItem(ConstantUtils.STORAGE_COUNTRY_KEY, code);
      localStorage.setItem(ConstantUtils.STORAGE_ZIP_KEY, JSON.stringify(this.zipCodes));
      this.zipCodesSubject.next(this.zipCodes);
    }
  }

  private loadZipCodes(): void {
    const zipStr = localStorage.getItem(ConstantUtils.STORAGE_ZIP_KEY);
    this._country = localStorage.getItem(ConstantUtils.STORAGE_COUNTRY_KEY);

    this.zipCodes = zipStr && JSON.parse(zipStr) || [];

    if (!this._country) {
      this._country = ConstantUtils.COUNTRY_CODE;
      localStorage.setItem(ConstantUtils.STORAGE_COUNTRY_KEY, this._country);
    }

    this.zipCodesSubject.next(this.zipCodes);
  }

  public addZipCode(zipCode: string): void {
    if (!this.zipCodes.includes(zipCode)) {
      this.zipCodes = [zipCode, ...this.zipCodes];
      localStorage.setItem(ConstantUtils.STORAGE_ZIP_KEY, JSON.stringify(this.zipCodes));
      this.zipCodesSubject.next(this.zipCodes);
    }
  }

  public removeZipCode(zipCode: string): void {
    this.zipCodes = this.zipCodes.filter(el => el !== zipCode);
    localStorage.setItem(ConstantUtils.STORAGE_ZIP_KEY, JSON.stringify(this.zipCodes));
    this.zipCodesSubject.next(this.zipCodes);
  }


}
