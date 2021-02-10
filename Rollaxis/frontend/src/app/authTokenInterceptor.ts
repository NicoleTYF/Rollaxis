import { HttpInterceptor, HttpRequest, HttpXsrfTokenExtractor } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor { 

    constructor(private xsrfTokenExtractor: HttpXsrfTokenExtractor) {
    }
    
    intercept(req:HttpRequest<any>, next: any) {
        let xsrfToken = this.xsrfTokenExtractor.getToken();
        if (req.method == "POST" && xsrfToken != null) {
            const authorizedRequest = req.clone({
                withCredentials: true,
                headers: req.headers.set("X-XSRF-TOKEN", xsrfToken)
            });
            return next.handle(authorizedRequest);
        } else {
            next.handle(req);
        }
    }
}