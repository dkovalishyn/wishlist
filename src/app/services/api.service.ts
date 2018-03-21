import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class ApiService {
  private protocol = 'http';
  private baseApiUrl = 'api/v1';
  private serverPath = 'localhost';
  private port = '10010';

  constructor (
    private http: HttpClient,
    private messageService: MessageService,
  ) {}

  private buildFullUrl (path: string): string {
    return `${this.protocol}://${this.serverPath}:${this.port}/${this.baseApiUrl}/${path}`;
  }

  private buildUrl (path: string): string {
    return `${this.baseApiUrl}/${path}`;
  }

  get<T> (path: string): Observable<T> {
    const requestUrl = this.buildFullUrl(path);
    console.log(requestUrl);
    return this.http.get(requestUrl).pipe(
      catchError(this.handleError<T>(requestUrl))
    );
  }

  post<T> (path: string, body: any): Observable<T> {
    const requestUrl = this.buildFullUrl(path);
    const httpOptions = {
      headers: new HttpHeaders({
        contentType: 'application//json',
      })
    };
    return this.http.post(requestUrl, body, httpOptions).pipe(
      catchError(this.handleError<T>(requestUrl, body))
    );
  }

  private handleError<T> (path: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`Failed to handle request: ${path}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(message);
  }
}
