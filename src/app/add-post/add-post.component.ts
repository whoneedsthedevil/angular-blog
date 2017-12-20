import { Component, OnInit } from '@angular/core';

import { Post } from '../posts/post';
import { PostService } from '../services/post.service'; 


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, text, labels): void {

    const post = {
    	name: title,
    	author: 'Administrator',
    	likes: 0,
    	labels: labels,
    	post: JSON.stringify(text),
    	date: new Date(),
    	color: 'green'
    }


    if (!post) { return; }
    this.postService.addPost( post as Post)
      .subscribe(post => this.posts.push(post));
  }

}
