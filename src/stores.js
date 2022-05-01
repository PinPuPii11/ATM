import {writable} from 'svelte/store';

let data = {'1111':{number: '1111', pin: '1111', balance: 5000},
            '2222':{number: '2222', pin: '2222', balance: 1000}};

export const accounts = writable(data);
export const islogin = writable(false);
export const mode = writable('');
export const account = writable('');