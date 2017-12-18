import { Races } from './races';

export const RACES: Races[] = [{
    id: 1,
    name: 'Lorem Daytona Thunderdome',
    date: new Date('2512-01-04T14:00:00'),
    about: 'Race through the ruins of an ancient Florida battle arena.',
    entryFee: 600,
    isRacing: false,
    image: './assets/img/daytona.jpeg',
    featured: false,
    quantity: 0,
    quantityBought: 0,
    inStock: 4
}, {
    id: 2,
    name: 'San Francisco Ruins',
    date: new Date('2512-07-03T20:00:00'),
    about: 'Drift down the streets of a city almost sunk under the ocean.',
    entryFee: 700,
    isRacing: true,
    image: './assets/img/san-francisco.jpeg',
    featured: true,
    quantity: 0,
    quantityBought: 0,
    inStock: 2
}, {
    id: 3,
    name: 'New York City Skyline',
    date: new Date('2512-07-12T21:00:00'),
    about: 'Fly between buildings in the electronic sky.',
    entryFee: 300,
    isRacing: false,
    image: './assets/img/new-york.jpeg',
    featured: true,
    quantity: 0,
    quantityBought: 0,
    inStock: 3
}];
