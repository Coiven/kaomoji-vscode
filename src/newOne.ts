import {MOJI_LIST, Moji} from './kaomoji';

export const allMojis = MOJI_LIST.flatMap((moji: Moji) => moji['yan']);

export default function newOne() {
  return allMojis[Math.floor(Math.random() * allMojis.length)];
}