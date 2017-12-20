import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../posts/post';

import { MessageService } from './message.service';


  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class PostService {
  private postsUrl = 'http://localhost:3004/posts';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getPosts(): Observable<Post[]> {
  	return  this.http.get<Post[]>(this.postsUrl)
      .pipe(
        tap(posts => this.log(`fetched posts`)),
        catchError(this.handleError('getPosts', []))
      );
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
  	return this.http.get<Post>(url).pipe(
        tap(_ => this.log(`fetched post id=${id}`)),
        catchError(this.handleError<Post>(`getPost id=${id}`))
      );
  }

  /** PUT: update the post on the server */
  updatePost (post: Post): Observable<any> {
    const url = `${this.postsUrl}/${post.id}`;
  
    return this.http.put<Post>(url, post, httpOptions).pipe(
      tap(_ => this.log(`updated post id=${post.id}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }

  /** POST: add a new post to the server */
  addPost (post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions).pipe(
      tap((post: Post) => this.log(`added post w/ id=${post.id}`)),
      catchError(this.handleError<Post>('addPost'))
    );
  }

  /** DELETE: delete the post from the server */
  deletePost (post: Post | number): Observable<Post> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;

    return this.http.delete<Post>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted post id=${id}`)),
      catchError(this.handleError<Post>('deletePost'))
    );
  }

  /* GET posts whose name contains search term */
  searchHeroes(term: string): Observable<Post[]> {
    if (!term.trim()) {
      // if not search term, return empty post array.
      return of([]);
    }
    return this.http.get<Post[]>(`${this.postsUrl}?name_like=${term}`).pipe(
      tap(_ => this.log(`found postes matching "${term}"`)),
      catchError(this.handleError<Post[]>('searchHeroes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('PostService: ' + message);
  }
}