import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DatepickerBarComponent }   from './components/datepicker-bar/datepicker-bar.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AddPostComponent } from './add-post/add-post.component';
import { LabelsComponent } from './components/labels/labels.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'datepicker', component: DatepickerBarComponent },
	{ path: 'labels', component: LabelsComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'posts', component: PostsComponent },
	{ path: 'add-post', component: AddPostComponent },
	{ path: 'detail/:id', component: PostDetailComponent }
	];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
