import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { InstructorModule } from '../instructor.module';
import { InformationsService } from '../services/informations.service';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit{
  instructorInfo :any ;
  constructor(private informationsService:InformationsService){}


ngOnInit(): void {
  
 this.getInfo();
}


getInfo(){
  this.informationsService.getInstructorInfo(1).subscribe((response)=>{


this.instructorInfo= response;

console.log(this.instructorInfo);


  })
}











}
