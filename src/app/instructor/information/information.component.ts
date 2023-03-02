import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InformationsService } from '../services/informations.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {

  constructor(private informationsService:InformationsService){}

}
