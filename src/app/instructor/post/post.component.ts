import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
@Input() posts:any;
  constructor(private postsService:PostsService){}

}
