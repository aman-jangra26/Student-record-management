import {writable} from 'svelte/store';
import type { student } from '../app';
export const Data = writable<student[]>([
      {id: 1, name: 'Aman', age: 21, gender: 'male', country: 'India',state:'Delhi',city:'Nangloi'}

     
]);
export const countries:string[]=['USA','India','United Kingdom','China','Australia'];
export const states  = new Map<string,string[]>([
    ['USA', ['California', 'Texas', 'New York', 'Florida']],
    ['India', ['Delhi', 'Mumbai', 'Bangalore', 'Gurugram']],
    ['United Kingdom', ['London', 'Manchester', 'Birmingham', 'Glasgow']],
    ['China', ['Beijing', 'Shanghai', 'Chengdu', 'Guangzhou']],
    ['Australia', ['Sydney', 'Melbourne', 'Brisbane  ', 'Perth']],
     
]);