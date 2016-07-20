import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {IProduce} from "./produce";




@Injectable()
export class ProduceService{
  //TODO: change url to the api endpoint when the service has been created
  private _productUrl = 'api/produce.json';
  pageTitle: string = 'Produce Service';

  constructor(private _http: Http){}


  getProduce(): Observable<IProduce[]> {
    return this._http.get(this._productUrl)
      .map((response: Response) => <IProduce[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
