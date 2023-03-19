import {AfterViewInit, ChangeDetectorRef, Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {User} from "../models/user.interface";

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements AfterViewInit{
  @Input() user!: User;
  activeTemplate!: TemplateRef<any>;

  @ViewChild('premiumUserCard', { static: false })
  premiumUserCard!: TemplateRef<any>;
  @ViewChild('basicUserCard', { static: false })
  basicUserCard!: TemplateRef<any>;

constructor(private cdr: ChangeDetectorRef) {
}
  getUserCardTemplate(user:User) {
    this.activeTemplate= user.type === 'premium' ? this.premiumUserCard : this.basicUserCard;
  }

  ngAfterViewInit() {
    this.getUserCardTemplate(this.user);
    this.cdr.detectChanges();
  }

}
