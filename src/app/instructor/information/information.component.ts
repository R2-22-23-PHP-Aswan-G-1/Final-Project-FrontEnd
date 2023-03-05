
import { Component,OnInit ,Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { RoleService } from 'src/app/services/role.service';
import { InstructorModule } from '../instructor.module';
import { InformationsService } from '../services/informations.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit{

  dropdownList :any[] = [];
  selectedItems :any= [];
  dropdownSettings:IDropdownSettings ={
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };;
 @Input() instructorInfo :any ;
  constructor(private informationsService:InformationsService,private roleService:RoleService){}


// ngOnInit(): void {
//  this.getInfo()
 
// }



// getInfo(){
//  if( this.roleService.instructor.getValue() != null){
//   console.log(this.roleService.instructor.getValue())
//  this.instructorInfo= this.roleService.instructor.getValue()
//  }
// }







ngOnInit() {
  this.dropdownList = [
    { item_id: 1, item_text: 'Mumbai' },
    { item_id: 2, item_text: 'Bangaluru' },
    { item_id: 3, item_text: 'Pune' },
    { item_id: 4, item_text: 'Navsari' },
    { item_id: 5, item_text: 'New Delhi' }
  ];
  this.selectedItems = [
    // { item_id: 3, item_text: 'Pune' },
    // { item_id: 4, item_text: 'Navsari' }
  ];
  this.dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
}
onItemSelect(item: any) {
  console.log(item);
}
onSelectAll(items: any) {
  console.log(items);
}




///////trak///////////////////////



  majorForm : FormGroup=new FormGroup({
  major : new FormControl(null,[Validators.required])

     })



addMajor(form :FormGroup){
  console.log(form)
}

updateMajor(form :FormGroup){
  console.log(form)
  console.log("update")
}
/////////////////////////education/////////

educationForm : FormGroup=new FormGroup({
education:new FormControl(null,[Validators.required])
})



addEducation(form :FormGroup){
  console.log(form)
}

updateEducation(form:FormGroup){
  console.log(form)
}
////////////////////about me



aboutMeForm : FormGroup=new FormGroup({
  trak:new FormControl(null,[Validators.required]),
 subtrak:new FormControl(null,[Validators.required]),
  description:new FormControl(null,[Validators.required])

})



addAboutMe(form:FormGroup){
  console.log(form)
}

updateAboutMe(form:FormGroup){
  console.log(form)
}
/////////////////work History

workHistoryForm : FormGroup=new FormGroup({
  workHistory:new FormControl(null,[Validators.required]),

})



addWorkHistory(form:FormGroup){
console.log(form)
}

updateWorkHistory(form:FormGroup){
  console.log(form)
}


//////////////////language//////////


LanguageForm : FormGroup=new FormGroup({

})



addLanguage(form:FormGroup){
  console.log(form)
}

updateLanguage(form:FormGroup){
  console.log(form)
}





///////////////////certificate/////

certificateForm : FormGroup=new FormGroup({

})



addCertificate(form:FormGroup){
  console.log(form)
}

updateCertificate(form:FormGroup){
  console.log(form)
}





///////////////Image   /////////////////

imgForm : FormGroup =new FormGroup({
 img:new FormControl(null,[Validators.required]),

})



updateImg(form:FormGroup){
  console.log(form)
}


}