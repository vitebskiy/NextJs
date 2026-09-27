import type { ReactElement } from 'react';
import styles from './Card.module.css';
import { CardProps } from './Card.props';
import { Like } from '../Like/Like';

export const Card = ({
  img,
  category,
  when,
  like,
  title,
  descr,
  time,
  href,
}: CardProps): ReactElement => {
  return (
    <>
      <div className={styles['card']}>
        <div className="top">
          <img className={styles['img']} src={img} alt="изображение" />
        </div>
        <div className={styles['row']}>
          <div className={styles['left']}>
            <div className={styles['category']}>{category}</div>
            <div className={styles['date']}>{when}</div>
          </div>
          <div className={styles['right']}>
            <Like like={like} />
          </div>
        </div>
        <div className={styles['content']}>
          <h3 className={styles['title']}>{title}</h3>
          <p className={styles['descr']}>{descr}</p>
          <div className={styles['row-content']}>
            <span className={styles['time']}>{time}</span>
            <a className={styles['link']} href={href}>
              Читать
              <span>
                <img src="/arrow.svg" alt="" />
              </span>{' '}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
