import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PokemonsProvider } from '../../providers/pokemons/pokemons';
import { DetailsPage } from '../../pages/details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  pokemons;
  constructor(public navCtrl: NavController, private pokemonsProvider : PokemonsProvider) {

    this.pokemonsProvider.getPokemons().then((pokemons: any)=>{
      let p = pokemons.results
     p.forEach(function(pokemon) {
      let u = pokemon.url
      let idImage = u.substring(34, u.length -1);
      pokemon.id = idImage;
    });
      this.pokemons = p;
    },  (err)=>{
      console.log(err);
    })
  }

  details(id)
  {
    let param = {'id' : id};
    this.navCtrl.push(DetailsPage, param);
  }
}
