import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { ArrayComponent } from './array/array.component';
import { RformComponent } from './rform/rform.component';
import { ChatComponent } from './chat/chat.component';
const routes: Routes = [
  {path : "comp1",component : C1Component},
  {path:"arrayComp",component:ArrayComponent},
  {path:"PersonalDetails",component:RformComponent},
  {path:"chat",component:ChatComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
