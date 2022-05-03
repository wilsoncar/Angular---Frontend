export class SharedEndPoints{
    END_POINTS: any;
    API_URL: string;

    constructor(API_URL: string){
        this.API_URL = API_URL;
        this.END_POINTS = {
            LUHN: this.API_URL + '/luhn',
            REGISTRO: this.API_URL + '/registro',
            ISACTIVE: this.API_URL + '/IsActive',
            LOGIN: this.API_URL + '/login',
        }
    }
}