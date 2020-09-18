import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
//here it is imported from service 

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  ques1 = "Question 2:"
  description = "Create an array with name book having properties b_id, b_title, b_author. Display the array content in the web page using ordered list. Also, apply CSS on the array. Implement it using service file.";
  book = []; // empty string to be used to store the values later.
  constructor(private var1: BookService) { }

  ngOnInit(): void {
    // here the values are stored inside book string.
    this.book = this.var1.bookDetails();
  }

}
