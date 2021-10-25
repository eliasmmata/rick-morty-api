import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SpinnerService } from "../services/spinner.service";
import { delay } from 'rxjs/operators';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

    constructor(private spinnerService:SpinnerService) {}

    /* intercept(request:HttpRequest<any>, next:HttpHandler) {

        this.spinnerService.requestStarted();
        console.log('Auth Intercept Provider')
        return next.handle(request);
    } */
    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {

        this.spinnerService.requestStarted();
        console.log('Auth Intercept Provider')
        return this.handler(next, request);
    }
    handler(next:any, request:any) {
        return next.handle(request)
        .pipe(
            delay( 250 ),
            tap(
                (event:any) => {
                    if(event instanceof HttpResponse) {
                        this.spinnerService.requestEnded();
                    }
                },
                (error: HttpErrorResponse) => {
                    this.spinnerService.resetSpinner();
                    throw error;
                }
            ),
        );
    }
}