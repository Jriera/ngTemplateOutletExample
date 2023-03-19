import {Component} from '@angular/core';
import {User} from "./models/user.interface";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngTemplateOutletExample';
  user: User = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    type: 'premium',
    membershipExpiryDate: '2023-12-31'
  }

}
