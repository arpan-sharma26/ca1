import { Injectable } from '@angular/core';
 // service created
@Injectable({
  providedIn: 'root'
})
export class BookService {
  // in service class, a function is also created which returns array of objects which is 
  // accessed through TypeScript file.
  bookDetails() {
    return [
      { b_id: 9810, b_title: "Learn to code in Python", b_author: "K Subramanium" },
      { b_id: 8923, b_title: "English Communication", b_author: "Deepti Sinha" },
      { b_id: 1123, b_title: "Front-End Development (Angular Framework)", b_author: "Arpan Sharma" },
      { b_id: 9901, b_title: "Computer Science Fundamentals", b_author: "Vaishnavi Narayan" },
      { b_id: 2201, b_title: "Hardware Architecture", b_author: "Sai Senthil" },
      { b_id: 1101, b_title: "Bootstrap VS CSS, which one is Better?", b_author: "Yash Barolia" },
      { b_id: 9011, b_title: "LPU code of ethics", b_author: "Chintan Sharma" }
    ]
  }
  constructor() { }
}
