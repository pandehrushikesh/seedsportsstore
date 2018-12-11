import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Injectable()
export class AuthGuard {
    constructor(
        private router: Router,
        private auth: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.auth.authenticate) {
             this.router.navigate(['/admin/auth']);
            return false;
        }
        return true;
    }
}
