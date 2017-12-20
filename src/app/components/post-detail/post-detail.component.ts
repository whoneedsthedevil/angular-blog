import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../posts/post';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PostService }  from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() hero: Post;
  constructor(
	  private route: ActivatedRoute,
	  private postService: PostService,
	  private location: Location
	) {}

	ngOnInit(): void {
	  this.getPost();
	}

	getPost(): void {
	  const id = +this.route.snapshot.paramMap.get('id');
	  this.postService.getPost(id)
	    .subscribe(hero => this.hero = hero);
	}

	goBack(): void {
	  this.location.back();
	}
	save(): void {
	   this.postService.updatePost(this.hero)
	     .subscribe(() => this.goBack());
	 }
}
