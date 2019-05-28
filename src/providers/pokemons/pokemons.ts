import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PokemonsProvider {

  pokemonUrl = "https://pokeapi.co/api/v2/pokemon";

  constructor(public http: HttpClient) {
    console.log('pokemons.results');
  }

getPokemons() {
  return new Promise((resolve, reject) => {
    this.http.get(`${this.pokemonUrl}?limit=151`).subscribe(
      resp => {
        resolve(resp);
      },
      err => {
        reject(err);
      }
    );
  });
}

getDetails(id) {
  return new Promise((resolve, reject) => {
    this.http.get(`${this.pokemonUrl}/`+id).subscribe(
      resp => {
        resolve(resp);
      },
      err => {
        reject(err);
      }
    );
  });
}

}