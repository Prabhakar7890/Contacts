import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path:'contacts' , component:ContactsComponent},
  { path:'update', component:UpdateComponent},
  { path:'addcon', component:AddContactComponent},
  { path:'', redirectTo:'contacts', pathMatch:'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
