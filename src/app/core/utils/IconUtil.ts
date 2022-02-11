export class IconUtil {

    public static getIconByWeatherCode(code: number): string {
        if (code >= 200 && code < 600) {
            return 'rain';
        } else if (code >= 600 && code < 700) {
            return 'snow';
        } else if (code >= 700 && code < 800 || code >= 801) {
            return 'clouds';
        }
        return 'sun';
    }

}
