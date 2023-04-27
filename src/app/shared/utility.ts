import { HttpHeaders } from '@angular/common/http';

export class Utility {

    constructor() { }

    public static options() {
        const header = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return { headers: header, withCredentials: true };
    }
}