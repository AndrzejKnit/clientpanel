import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private settingsService: SettingsService
    ) {

    }

    canActivate(): Observable<boolean> {
        return this.afAuth.authState.pipe(map(auth => {
            if (!auth) {
                this.router.navigate(['/login']);
                return false;
            } else {
                return true;
            }
        }));
    }
}