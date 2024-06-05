import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from 'projects/assignment/src/public-api';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthenticationGuard } from './gaurds/authentication.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:"dashboard",
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginPageComponent
    
    
    
  },
    {
      path:"dashboard",
      component:DashboardComponent,
      canActivate:[AuthenticationGuard],
      children:[{
        path:"assignment",
        loadChildren:()=>
          loadRemoteModule({
            type:'module',
            remoteEntry:'http://localhost:4201/remoteEntry.js',
    
            exposedModule:'./childModule'
          })
          .then(m=>m.AssignmentHomeModule)
      
        }
      ]
    }
      
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
