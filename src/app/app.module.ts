import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { NgDatepickerModule } from 'ng2-datepicker';

import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import * as $ from 'jquery'; window["$"] = $; window["jQuery"] = $;

import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

import { PostService } from './services/post.service';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

import { PostSearchComponent } from './components/post-search/post-search.component';
import { DatepickerBarComponent } from './components/datepicker-bar/datepicker-bar.component';
import { LabelsComponent } from './components/labels/labels.component';
import { FroalaComponent } from './components/froala-editor/froala-editor.component';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PostSearchComponent,
    DatepickerBarComponent,
    LabelsComponent,
    FroalaComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
 
    NgDatepickerModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [ PostService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
