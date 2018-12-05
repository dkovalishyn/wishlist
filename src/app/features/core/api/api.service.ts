import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../log/services/message.service';
import { throwError } from 'rxjs/internal/observable/throwError';
import config from '../../../../config.json';

@Injectable()
export class ApiService {
  private protocol = config.protocol;
  private baseApiUrl = config.baseApiUrl;
  private serverPath = config.serverPath;
  private port = config.port;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {
  }

  private buildFullUrl(path: string): string {
    return `${this.protocol}://${this.serverPath}:${this.port}/${this.baseApiUrl}/${path}`;
  }

  private buildUrl(path: string): string {
    return `${this.baseApiUrl}/${path}`;
  }

  get<T>(path: string): Observable<T> {
    const requestUrl = this.buildFullUrl(path);
    return this.http.get<T>(requestUrl).pipe(
      catchError((err) => this.handleError(err))
    );
  }

  post<T>(path: string, body: any): Observable<T> {
    const requestUrl = this.buildFullUrl(path);
    return this.http.post<T>(requestUrl, body).pipe(
      catchError((err) => this.handleError(err))
    );
  }

  delete<T>(path: string): Observable<T> {
    const requestUrl = this.buildFullUrl(path);
    return this.http.delete<T>(requestUrl).pipe(
      catchError((err) => this.handleError(err))
    );
  }

  put<T>(path: string, body: any): Observable<T> {
    const requestUrl = this.buildFullUrl(path);
    return this.http.put<T>(requestUrl, body).pipe(
      catchError((err) => this.handleError(err))
    );
  }

  private handleRequestError<T>(path: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`Failed to handle request: ${path}`);
      return of(result as T);
    };
  }

  handleError = (err) => {
    console.error(err);

    const { error, status } = err;
    if (error instanceof ErrorEvent) {
      this.messageService.error(error);
    } else {
      this.messageService.error(new Error(`Backend returned code ${status}. body was: ${error}`));
    }

    return throwError('Something bad happened; please try again later.');
  }

  private log(message: string) {
    this.messageService.add(message);
  }
}
