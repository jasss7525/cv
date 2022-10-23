import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from 'src/directives/highlight.directive';
import { FirstLetterCapsPipe } from 'src/pipes/first-letter-caps.pipe';
import { UsersService } from 'src/services/users.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,HighlightDirective, ChildComponent,FirstLetterCapsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
