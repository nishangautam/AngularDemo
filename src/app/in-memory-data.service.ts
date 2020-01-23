import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const heroes= [
      { id: 1, name: 'Nishan' },
      { id: 2, name: 'Alisha' },
      { id: 3, name: 'Archu' },
      { id: 4, name: 'Dipa' },
      { id: 5, name: 'Ramu' },
      { id: 6, name: 'Zocee' },
      { id: 7, name: 'Ayush' },
      { id: 8, name: 'Prakash' },
      { id: 9, name: 'Ashok' },
      { id: 10, name: 'Sunil' }
    ];
    return { heroes };
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
