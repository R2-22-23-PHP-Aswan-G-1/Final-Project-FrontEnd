import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  sub:any;
  constructor(_ProfileService: ProfileService) {
    this.sub = _ProfileService.getProfile().subscribe(
      (response:any) => console.log(response) )
  };
  ngOnDestroy(): void {
    this.sub.subscribe();
  }
}
