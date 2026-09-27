import { Card } from '@/components';
import { CardProps } from '@/components/Card/Card.props';

export default function Home() {
  const items: CardProps[] = [
    {
      id: 'grid-css',
      img: '/mini.jpg',
      category: 'Front-end',
      when: '1 месяц назад',
      like: 4,
      title: 'Как работать с CSS Grid',
      descr:
        'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
      time: '3 минуты',
      href: '/',
    },
    
  ];

  return (
    <div>
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
    </div>
  );
}
