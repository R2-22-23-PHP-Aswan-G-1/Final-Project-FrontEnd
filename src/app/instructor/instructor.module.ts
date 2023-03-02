import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PostComponent } from './post/post.component';
import { InformationComponent } from './information/information.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    TestimonialComponent,
    PostComponent,
    InformationComponent,
    ProfileComponent,

  ],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule ,


  ],
  exports:[
ProfileComponent,

  ]
})
export class InstructorModule { }
