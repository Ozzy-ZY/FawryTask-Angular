import { Component, Input } from '@angular/core';
import { PostModel } from '../../models/PostModel.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {
  @Input() post!: PostModel;

}
