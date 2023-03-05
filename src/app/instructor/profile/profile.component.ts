import { Component ,OnInit} from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

instructorInfo:any;
posts:any;
testimonials:any
constructor( private profileService:ProfileService){}


ngOnInit(): void {
  console.log(this.profileService.api_key)
  this.profileService.getProfile().subscribe((response)=>{
    console.log(response);
    console.log(this.profileService.api_key)
  }
  ,(error)=>{console.log(error)}
  
  
  )
  
}

}
