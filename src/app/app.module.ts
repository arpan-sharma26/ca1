import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Here i have imported all the services and components which were created so that
// they can be accessed globally thrugh any component.
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { BookService } from './book.service';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // also we need to add the services in the provided section inside array.
  providers: [StudentService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
