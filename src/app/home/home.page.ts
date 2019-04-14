import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    static API_URL: string = "https://io.adafruit.com/api/v2/wiefel/feeds/motor-button/data";
    httpOptions: object;

    constructor(private httpClient: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-AIO-Key': '054a78f3ea34463cbe75c6f470fd9fdc'
            })
        };
    }

    drinkButtonClick() {
        console.log("Drink-button clicked!");

        const body = {
            value: true
        }

        this.httpClient.post<any>(HomePage.API_URL, body, this.httpOptions)
            .subscribe(result => console.log("Success!", result));
    }

}
