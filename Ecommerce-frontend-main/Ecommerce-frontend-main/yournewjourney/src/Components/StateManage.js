import { atom, selector } from 'recoil';

export const cartState = atom({
  key: 'cartState',
  default: [],
});

export const currentItem = atom({
  key: 'currentItem',
default:[]
});