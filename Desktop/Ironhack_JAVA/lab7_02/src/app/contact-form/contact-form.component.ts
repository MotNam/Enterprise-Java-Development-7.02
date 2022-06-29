import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

@ViewChild("form")
  form! : NgForm;
  user! : User; 
  

  constructor() {
    
    this.user = new User('', '', '', '', '');
    
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
   console.log(this.form.value);
   this.form.reset();

  }

}
