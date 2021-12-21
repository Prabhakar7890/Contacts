import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(public cs:ContactsService, public route:Router) { }

  addCon(contact:any){
    this.cs.addContact(contact).subscribe((res)=>{
      this.route.navigate([''])
    })
  }
  ngOnInit(): void {
  }

}
