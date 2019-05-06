import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { SearchBoxComponent } from "./search-box/search-box.component";

let routes: Routes;
routes = [
  {path: 'login', component: SignInComponent},
  {path: 'registration', component: SignUpComponent},
  {path: '', component: MenuComponent},
  {path: 'search/:type', component: SearchBoxComponent},
  // {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
