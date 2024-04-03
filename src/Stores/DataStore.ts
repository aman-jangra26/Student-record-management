import {writable} from 'svelte/store';
import type { studentType } from '../app';
export const studentData = writable<studentType[]>([
      {id: 1, name: 'Aman', age: 21, gender: 'male', country: 'India',state:'Delhi',city:'Nangloi'}

     
]);
export const countries:string[]=['USA','India','United Kingdom','China','Australia'];
export const states  = new Map<string,string[]>([
      ['USA', ['California', 'Texas', 'New York', 'Florida']],
        ['India', ['Delhi', ' Maharashtra', 'Haryana', 'Punjab']],
        ['United Kingdom', ['England', 'England', 'England', 'Scotland']],
        ['China', ['Beijing', 'Shanghai', 'Sichuan', 'Guangdong']],
        ['Australia', ['New South Wales', 'Victoria', 'Queensland', 'Western Australia']]
    ]
     
);