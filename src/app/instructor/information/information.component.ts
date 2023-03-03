
import { Component,OnInit ,Input} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RoleService } from 'src/app/services/role.service';
import { InstructorModule } from '../instructor.module';
import { InformationsService } from '../services/informations.service';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit{
 @Input() instructorInfo :any ;
  constructor(private informationsService:InformationsService,private roleService:RoleService){}


ngOnInit(): void {
 this.getInfo()
 
}



getInfo(){
 if( this.roleService.instructor.getValue() != null){
  console.log(this.roleService.instructor.getValue())
 this.instructorInfo= this.roleService.instructor.getValue()
 }
}










}
