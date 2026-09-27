import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  img: string;
  category: string;
  when: string;
  like: number;
  title: string;
  descr: string;
  time: string;
  href: string;
}
