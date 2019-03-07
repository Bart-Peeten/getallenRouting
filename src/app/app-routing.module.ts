import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {GetallenComponent} from './components/getallen/getallen.component';
import {InfoComponent} from './components/info/info.component';
import {ConfirmDeactivatorService} from './services/confirm-deactivator.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'getallen',
        component: GetallenComponent
    },
    {
        path: 'info',
        component: InfoComponent,
        canDeactivate: [ConfirmDeactivatorService]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ConfirmDeactivatorService]
})
export class AppRoutingModule { }
