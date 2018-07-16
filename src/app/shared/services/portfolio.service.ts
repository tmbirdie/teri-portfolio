import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

import {Observable, Subject} from 'rxjs/RX';
import {catchError} from "rxjs/operators";
import {Portfolio} from "../models/portfolio-model";

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class PortfolioService {


  private baseUrl = 'api/portfolioList';

  constructor(private http: HttpClient) {
  }

  getPortfolioList(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(this.baseUrl)
      .pipe(catchError(this.handleError<Portfolio[]>('getPortfolioList', [])));
  }

  getPortfolioItem(id: number): Observable<Portfolio> {
    return this.http.get<Portfolio>('/api/portfolioList/' + id)
      .pipe(catchError(this.handleError<Portfolio>('getPortfolioItem')));

  }

  savePortfolioItem(portfolioItem: Portfolio) {
    return this.http.post<Portfolio>('/api/portfolioList/', portfolioItem, options)
      .pipe(catchError(this.handleError<Portfolio>('savePortfolioItem')));
  }

  updatePortfolioItem(portfolioItem: Portfolio) {
    return this.http.put<Portfolio>('/api/portfolioList/', portfolioItem, options)
      .pipe(catchError(this.handleError<Portfolio>('updatePortfolioItem')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return Observable.of(result as T);
    }
  }






}
