'use client';

import { Card, Liked } from '@/components';
import { CardProps } from '@/components/Card/Card.props';
import { useState } from 'react';
import styles from './page.module.css'

export default function Home() {
  const items: CardProps[] = [
    {
      id: 'grid-css',
      img: '/mini.jpg',
      category: 'Front-end',
      when: '1 месяц назад',
      like: 5,
      title: 'Как работать с CSS Grid',
      descr:
        'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
      time: '3 минуты',
      href: '/',
    },
    {
      id: 'grid-css',
      img: '/mini.jpg',
      category: 'Front-end',
      when: '1 месяц назад',
      like: 5,
      title: 'Как работать с CSS Grid',
      descr:
        'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
      time: '3 минуты',
      href: '/',
    },
    {
      id: 'grid-css',
      img: '/mini.jpg',
      category: 'Front-end',
      when: '1 месяц назад',
      like: 5,
      title: 'Как работать с CSS Grid',
      descr:
        'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
      time: '3 минуты',
      href: '/',
    },
  ];

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = async () => {
    const newIsLiked = !isLiked;

    setIsLiked(newIsLiked);

    await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isLiked: newIsLiked,
      }),
    });
  };

  return (
    <div className={styles['list']} >
      {items.map((i) => (
        <Card
          key={i.id}
          id={i.id}
          img={i.img}
          category={i.category}
          when={i.when}
          like={i.like}
          title={i.title}
          descr={i.descr}
          time={i.time}
          href={i.href}
        />
      ))}

      <Liked isLiked={isLiked} onClick={handleClick} />
    </div>
  );
}
