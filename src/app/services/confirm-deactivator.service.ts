import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import {Observable} from 'rxjs/index';
import {InfoComponent} from '../components/info/info.component';

@Injectable()
export class ConfirmDeactivatorService implements CanDeactivate<InfoComponent> {

    constructor(private router: Router) { }

    canDeactivate(component: InfoComponent,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot) {
        console.log(component.isClicked);
        if (!component.isClicked) {
            return window.confirm('De knop "klik" moet gedrukt zijn voor je deze pagina kan verlaten.');
        } else {
            this.router.navigate(['']);
        }
    }
}
