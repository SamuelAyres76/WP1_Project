import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [ CommonModule ]
})

export class SearchComponent {

  constructor(private http: HttpClient) { }

  fetchAmiiboData() {
    // Make HTTP GET request to the API
    this.http.get<any>('https://www.amiiboapi.com/api/amiibo/?name=captain falcon').subscribe(
      response => {
        console.log(response); // Log the response to the console
      },
      error => {
        console.error('Error fetching amiibo data:', error); // Log any errors to the console
      }
    );
  }
}
