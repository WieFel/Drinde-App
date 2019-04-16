import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    static API_URL: string = "https://io.adafruit.com/api/v2/wiefel/feeds/motor-button/data";
    static EMPTY_BUTTON: string = "assets/button/button_empty.png";
    static FULL_BUTTON: string = "assets/button/button_filled.png"
    httpOptions: object;
    buttonImage: string = HomePage.EMPTY_BUTTON;
    drinking: boolean = false;
    bottleEmpty: boolean = false;

    constructor(
        private httpClient: HttpClient
    ) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-AIO-Key': '054a78f3ea34463cbe75c6f470fd9fdc'
            })
        };
    }

    drinkButtonClick() {
        if (!this.drinking)
            this.buttonImage = HomePage.FULL_BUTTON;
        else
            this.buttonImage = HomePage.EMPTY_BUTTON;
        this.drinking = !this.drinking;

        const body = {
            value: 1
        }
        const false_body = {
            value: 0
        }


        this.httpClient.post(HomePage.API_URL, body, this.httpOptions)
            .subscribe(result => {
                console.log("Got result for post: ", result);
                this.httpClient.post<any>(HomePage.API_URL, false_body, this.httpOptions).subscribe(res => console.log("Result: ", res));
            });
    }

    refillButtonClick() {
        this.bottleEmpty = !this.bottleEmpty;
    }

}
