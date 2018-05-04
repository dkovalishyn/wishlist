import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../log/services/message.service';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable()
export class ApiService {
  private protocol = 'http';
  private baseApiUrl = 'api/v1';
  private serverPath = 'localhost';
  private port = '10010';

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
    console.log(requestUrl);
    return this.http.get<T>(requestUrl).pipe(
      catchError(({ error, status }) => this.handleError({ error, status }))

    );
  }

  post<T>(path: string, body: any): Observable<T> {
    const requestUrl = this.buildFullUrl(path);
    return this.http.post<T>(requestUrl, body).pipe(
      catchError(({ error, status }) => this.handleError({ error, status }))
    );
  }

  delete<T>(path: string): Observable<T> {
    const requestUrl = this.buildFullUrl(path);
    return this.http.delete<T>(requestUrl).pipe(
      catchError(({ error, status }) => this.handleError({ error, status }))
    );
  }

  put<T>(path: string, body: any): Observable<T> {
    const requestUrl = this.buildFullUrl(path);
    return this.http.put<T>(requestUrl, body).pipe(
      catchError(({ error, status }) => this.handleError({ error, status }))
    );
  }

  private handleRequestError<T>(path: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`Failed to handle request: ${path}`);
      return of(result as T);
    };
  }

  private handleError({ error, status }) {
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
