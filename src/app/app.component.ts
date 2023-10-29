import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'studybuddy';
  constructor(private http: HttpClient) {}

  fetchData() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
