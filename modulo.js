import { contador, promesa, lecturaPromesa, pokeApi } from './script.js';

const counter = document.getElementById('contador');

contador(counter)
console.log(await promesa())

lecturaPromesa()
pokeApi()