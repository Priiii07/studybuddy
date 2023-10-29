import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'studybuddy';
  userInput: number = 0;
  response: any;

  constructor(private http: HttpClient) {}

  fetchData() {
    console.log('fetchData method called');
    const url = `https://jsonplaceholder.typicode.com/posts/${this.userInput}/comments`;
    this.http.get(url).subscribe((data) => {
      console.log(data);
    });
  }
}
