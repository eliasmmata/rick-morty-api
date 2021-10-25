/* import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SpinnerService } from "../services/spinner.service";

@Injectable()

export class HttpErrorInterceptor implements HttpErrorInterceptor {

    constructor(private spinnerService:SpinnerService) {}

    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {

        this.spinnerService.requestStarted();
        return this.handler(next, request);
    }
    handler(next:any, request:any) {
        return next.handle(request)
        .pipe(
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

} */