import {writable} from 'svelte/store';
import type { demoobj } from '../app';
export const Data = writable<demoobj[]>([]);