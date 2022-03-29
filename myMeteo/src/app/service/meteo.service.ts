import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Meteo } from "../entities/meteo.entity";

@Injectable(
    {providedIn : 'root'}
)
export class MeteoService{
    private BASE_URL:string = 'http://localhost:8888/PHP_Start/CodeIgniter4-develop/public/Meteo/';
    
    constructor(
        private httpClient:HttpClient
        ){}

    //Http Options
    httpOptions = {
        headersn: new HttpHeaders({
            'Content-Type':'application/json'
        })
    }
    //Handle API errors
    handleError(error: HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
            console.error('An error occurred:',error.error.message);
        }else{
            console.error(
                `Backend returned code ${error.status},`+
                `body was : ${error.error}`
            );
        }
        return throwError(
            'Someting bad happend; please try again later...'
        )
    }

    findAll():Observable<any>{
        return this.httpClient.get(this.BASE_URL+'findall');
    }
  
    query2(ville:any){
        return this.httpClient.post(this.BASE_URL+'query',ville);
    }
    


    query(ville:any){
        return this.httpClient.get(this.BASE_URL+'query/'+ville);
    }
}