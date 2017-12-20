import { Component, OnInit } from '@angular/core';

import { Post } from './post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
              .subscribe(posts => this.posts = posts);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.postService.addPost({ name } as Post)
      .subscribe(post => {
        this.posts.push(post);
      });
  }

  delete(post: Post): void {
    this.posts = this.posts.filter(p => p !== post);
    this.postService.deletePost(post).subscribe();
  }
}
