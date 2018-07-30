import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient} from '@angular/common/http';


@Injectable()
export class UtilitiesService {

    constructor(public http:HttpClient)
    {

    }
    public Get(URL: string): Observable<any> {

        return this.http.get(URL)
                  .map(response => {
                      console.log(response);
                      return response
                  });
          }
}