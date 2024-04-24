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
  amiiboData: any;

  constructor(private http: HttpClient) { }

  addToFavorites(name: string, head: string, tail: string) {
    const favoriteAmiibo = { name, head, tail };
    console.log('Favorite Amiibo:', favoriteAmiibo);
    // You can store favoriteAmiibo to local storage or send it to backend for storage
}

  fetchAmiiboData(searchQuery: string) {
    // GET request to the API
    this.http.get<any>('https://www.amiiboapi.com/api/amiibo/?name=' + searchQuery).subscribe(
      response => {
        this.amiiboData = response; // Store this data
      },
      error => {
        console.error('Error fetching amiibo data:', error); // Error Handling.
      }
    );
  }
}