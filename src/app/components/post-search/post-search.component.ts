import { Component, OnInit } from '@angular/core';
 
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 
import { Post } from '../../posts/post';
import { PostService } from '../../services/post.service';
 
@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: [ './post-search.component.css' ]
})
export class PostSearchComponent implements OnInit {
  posts$: Observable<Post[]>;
  private searchTerms = new Subject<string>();
 
  constructor(private postService: PostService) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.posts$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.postService.searchHeroes(term)),
    );
  }
}