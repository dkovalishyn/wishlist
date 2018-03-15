import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {any} from 'codelyzer/util/function';
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

  makeRequest<T> (path: string): Observable<T> {
    const requestUrl = this.buildFullUrl(path);
    return this.http.get(requestUrl).pipe(
      catchError(this.handleError<T>(requestUrl))
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
