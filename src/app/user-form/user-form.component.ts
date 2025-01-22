import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user = {
    firstName: '',
    lastName: '',
    homeAddress: '',
    phoneNumber: ''
  };

  preventSqlInjection(value: string): boolean {
    const dangerousCharacters = /['"%;#&<>\-]/;
    return dangerousCharacters.test(value);
  }

  saveForm(): void {
    if (this.preventSqlInjection(this.user.firstName) ||
      this.preventSqlInjection(this.user.lastName) ||
      this.preventSqlInjection(this.user.homeAddress) ||
      this.preventSqlInjection(this.user.phoneNumber)) {
      alert('Form contains invalid characters!');
      return;
    }

    console.log('Form Submitted:', this.user);
  }
}
