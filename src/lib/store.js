import {writable} from 'svelte/store';

export const cardInfo = writable({
  label: 'Card Title',
  status: 'active'
});