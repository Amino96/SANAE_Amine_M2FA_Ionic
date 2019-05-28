import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PokemonsProvider } from '../../providers/pokemons/pokemons';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage{
    id;
    pokemon;
  constructor(public navCtrl: NavController, public navParams : NavParams, private pokemonsProvider : PokemonsProvider) {
    this.id = this.navParams.get('id');
    this.pokemonsProvider.getDetails(this.id).then((details: any)=>{
        console.log(details);
        this.pokemon = details;
        console.log(this.pokemon.base_experience);
      },  (err)=>{
        console.log(err);
      })
  }

}
