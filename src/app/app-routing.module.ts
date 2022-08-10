import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { HomeComponent } from './home/home.component';
import { LaunchComponent } from './launch/launch.component';

const routes: Routes = [
  { path: 'launch', component: LaunchComponent },
  { path: 'home', component: HomeComponent },
  { path: 'api', component: ApiComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// const appRoutes: Routes = [
//     { path: '', component: HomeComponent },
//     { path: 'api', component: ApiComponent }
// ]
// const appRoutingProviders: any[] = [];
// const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
