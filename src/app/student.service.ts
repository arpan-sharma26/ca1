import { Injectable } from '@angular/core';
// Here the service is created by using ng g s student.
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // Here inside the class StudentService i have created a function which returns objects in an array.
  studentList() {
    return [
      { name: "Arpan Sharma", course: "BSc Computer Science", contact: 9810762234 },
      { name: "Mudasir Zamani", course: "BTech", contact: 9845232257 },
      { name: "Kapil Kumar", course: "BBA", contact: 7822118921 },
      { name: "Aman Sinha", course: "BCA", contact: 9999222219 },
      { name: "Yash Garg", course: "MBA", contact: 6755432221 },
      { name: "Animesh Gupta", course: "MTech", contact: 9988212219 },
      { name: "Rohit Gupta", course: "BA", contact: 7777654987 },
      { name: "Monika Rastogi", course: "BPharma", contact: 9988217763 },
      { name: "Priya Kakkar", course: "B.Com", contact: 8899218343 },
      { name: "Aditya Kishor", course: "PhD", contact: 9822382155 }
    ]
  }
  constructor() { }
}
