export interface IForecastResult {
    cod: string;
    message: number;
    cnt: number;
    list: IDailyWeather[];
    city: ICity;
}

export interface ICity {
    id: number;
    name: string;
    coord: ICoord;
    country: string;
    population: number;
    timezone: number;
}

export interface IDailyWeather {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: IDailyTemp;
    feels_like: IDailyFeelsLike;
    pressure: number;
    humidity: number;
    weather: IWeather[];
}

export interface IDailyFeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

export interface IDailyTemp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

export interface IWeatherResult {
    id: number;
    name: string;
    coord: ICoord;
    weather: IWeather[];
    main: IAtmos;
    visibility: number;
    wind: IWind;
    clouds: IClouds;
    dt: number;
    sys: ISys;
    timezone: number;
    dt_txt?: string;
}

export interface ICoord {
    lon: number;
    lat: number;
}

export interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface IAtmos {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    feels_like?: number;
    sea_level?: number;
    grnd_level?: number;
    temp_kf?: number;
}

export interface IWind {
    speed: number;
    deg: number;
    gust?: number;
}

export interface IClouds {
    all: number;
}

export interface ISys {
    country?: string;
    sunrise?: number;
    sunset?: number;
    pod?: string;
}

export interface IUserZipCode {
    countryCode: string;
    zipCodes: string[];
}

export interface IFormValue {
    countryCode: string;
    zipCode: string;
}