import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import {InfoComponent} from '../components/info/info.component';

@Injectable()
export class ConfirmDeactivatorService implements CanDeactivate<InfoComponent> {

    constructor() { }

    canDeactivate(component: InfoComponent) {
        console.log(component.isClicked);
        return component.isClicked || window.alert('De knop "klik" moet gedrukt zijn voor je deze pagina kan verlaten.');
    }
}
