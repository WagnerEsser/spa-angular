import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonStorageService {

  constructor() { }

  get(name: string) {
    const storageList = JSON.parse(localStorage.getItem(name));
    return storageList ? storageList : [];
  }

  remove(array: number[], id: number) {
    const elementIndex = array.indexOf(id);
    if (elementIndex !== -1) {
      array.splice(elementIndex, 1);
    }
    return array;
  }

  add(array: number[], id: number) {
    array.push(id);
    return array;
  }

  save(name: string, array: number[]) {
    localStorage.setItem(name, JSON.stringify(array));
  }
}
