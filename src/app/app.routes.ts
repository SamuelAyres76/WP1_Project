import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { Component } from '@angular/core';
import { FavouritesComponent } from './favourites/favourites/favourites.component';

export const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'favourites', component: FavouritesComponent}
];