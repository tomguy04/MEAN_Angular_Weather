import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';

const routes: Routes = [{
    //define rules
    //http://localhost:4200/seattle
    path:'',
    pathMatch:'full',
    component: SeattleComponent
  },
  //http://localhost:4200/sanjose
  {
    path: 'sanjose',
    pathMatch: 'full',
    component: SanjoseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
