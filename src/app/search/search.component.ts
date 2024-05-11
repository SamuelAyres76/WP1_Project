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

export class SearchComponent 
{
  amiiboData: any;

  constructor(private http: HttpClient) { }

  // Add to Favorites.
  addToFavorites(name: string, head: string, tail: string) 
  {
    const favoriteAmiibo = { name, head, tail };
    console.log('Favorite Amiibo:', favoriteAmiibo);
  }

  // My GET request to the API
  fetchAmiiboData(searchQuery: string) 
  {
    this.http.get<any>('https://www.amiiboapi.com/api/amiibo/?name=' + searchQuery).subscribe
    (
      response => 
        {
          // Store the amiibo data.
          this.amiiboData = response;
        },
      error => 
        {
          // Error Handling.
          console.error('Error fetching amiibo data:', error);
        }
    );
  }
}