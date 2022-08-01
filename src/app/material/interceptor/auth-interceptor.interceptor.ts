import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const loggedUser = localStorage.getItem('loggedUser');
   
    if (loggedUser) {
      request = request.clone({
          headers: request.headers.set(
            'Authorization',
            loggedUser
          )
      });
    }
    return next.handle(request);
  }
}
