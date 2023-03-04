import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthonGuard } from './authon.guard';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './instructor/profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

  const routes: Routes = [
    {path:'',redirectTo:"/home" , pathMatch:'full'},
  {path:"register", component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:'home', component: HomeComponent,canActivate:[AuthonGuard]},
  {path:'profile',component:ProfileComponent},
  {path:'landing',component:ProfileComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

