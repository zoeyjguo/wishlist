import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidDomainValidator(['yahoo.com', 'hotmail.com']);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = new FormGroup({
    senderNameControl: new FormControl('', Validators.required),
    senderEmailControl: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessageControl: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  submitForm() {
    alert(`The form has been submitted with the following info:
      ${this.contactForm.get('senderNameControl')!.value}
      ${this.contactForm.get('senderEmailControl')!.value}
      ${this.contactForm.get('senderMessageControl')!.value}`);
  }
}
