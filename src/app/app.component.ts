import { Component } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [UserFormComponent]
})
export class AppComponent {
  title = 'angular-interview';
}
