// Author: Preston Lee

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { HomeComponent } from './home/home.component';
import { SmartLaunchComponent } from './smart/launch.component';
import { SmartRedirectComponent } from './smart/redirect.component';

const routes: Routes = [
  { path: 'launch', component: SmartLaunchComponent },
  { path: 'redirect', component: SmartRedirectComponent },
  { path: '', component: HomeComponent },
  { path: 'api', component: ApiComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
