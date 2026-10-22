import type { ReactElement } from 'react';
import styles from './Like.module.css';
import { LikeProps } from './Like.props';

export const Like = ({ like }: LikeProps): ReactElement => {
  return (
    <span className={styles['like']}>
      {like}
      <img src="/like.svg" alt="Иконка лайка" />
    </span>
  );
};
