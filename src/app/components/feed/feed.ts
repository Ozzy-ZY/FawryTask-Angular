import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { PostModel } from '../../models/PostModel.model';
import { Post } from "../post/post";
import { CommonModule } from '@angular/common';
import { SearchService } from '../../search-service';
import { Subscription } from 'rxjs';
import postsData from '../../../../public/data.json';

@Component({
  selector: 'app-feed',
  imports: [Post, CommonModule],
  templateUrl: './feed.html',
  styleUrl: './feed.css'
})
export class Feed implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  posts: PostModel[] = [];
  filteredPosts : PostModel[]= [];
  private readonly _searchService = inject(SearchService)
  private subscibtion: Subscription = new Subscription(); 

  async ngOnInit() {
    await this.loadPosts();    
    this.subscibtion.add(this._searchService.currentTerm.subscribe(searchTerm => this
      .Filter(searchTerm)))
  }

Filter(searchTerm: string): void {
  if (!searchTerm.trim()) {
    this.filteredPosts = [...this.posts];
  } else {
    this.filteredPosts = this.posts.filter(p =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}



private loadPosts() {
  this.posts = postsData;
  this.filteredPosts = [...this.posts];
}
}
