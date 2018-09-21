import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IAppConfig } from './models/config.model';

@Injectable()
export class AppConfig {

    static settings: IAppConfig;

    constructor(private http: HttpClient) { }

    load() {
        const jsonFile = `assets/config/app-config.json`;
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response) => {
                AppConfig.settings = <IAppConfig>response;
                resolve();
            }).catch((response: any) => {
                reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }
}